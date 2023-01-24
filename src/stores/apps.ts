import create from "zustand";
import randomstring from "randomstring";

export enum AppTypes {
    Folder,
    TextEditor,
    Placeholder
}

interface App {
    id: string;
    x: number;
    y: number;
    title: string;
    hidden: boolean;
    component: () => JSX.Element;
}


interface AppsState {
    apps: App[];
    updateWindow: (id: string, configs: Partial<App>) => void;
    toggleWindowVisibility: (appId: string, hidden?: boolean) => void;
    closeWindow: (appId: string) => void;
    setApps: (apps: App[]) => void;
    openApp: (component: () => JSX.Element, title: string) => void;
}

export const useAppsStore = create<AppsState>((set) => ({
    updateWindow: (id: string, configs: Partial<App>) => (
        set((state) => {
            const tempApps = state.apps;
            const appIndex = tempApps?.findIndex((x) => x?.id === id);

            if (appIndex !== undefined && configs?.x) tempApps[appIndex].x = configs.x;
            if (appIndex !== undefined && configs?.y) tempApps[appIndex].y = configs.y;
            if (appIndex !== undefined && configs?.hidden) tempApps[appIndex].hidden = configs.hidden;
            
            return {
                apps: [...tempApps]
            };
        })
    ),
    toggleWindowVisibility: (appId: string, hidden?: boolean) => (
        set((state) => {
            const appIndex = state.apps.findIndex(app => app.id === appId);
            const tempApps = state.apps
            if (hidden !== undefined) tempApps[appIndex].hidden = hidden;
            else tempApps[appIndex].hidden = !tempApps[appIndex].hidden;
            
            return {
                apps: [...tempApps]
            }
        })
    ),
    closeWindow: (appId: string) => (
        set((state) => {
            const tempApps = state.apps.filter(app => app.id !== appId);
            
            return {
                apps: [...tempApps]
            };
        })
    ),
    setApps: (apps: App[]) => (
        set((state) => ({
            apps: [...apps]
        }))
    ),
    openApp: (component: () => JSX.Element, title: string) => (
        set((state) => {
            const newApp = {
                id: randomstring.generate(8),
                x: 0,
                y: 0,
                hidden: false,
                title: title,
                component
            };

            return {
                apps: [...state.apps, newApp]
            };
        })
    ),
    apps: []
}));