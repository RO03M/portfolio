import create from "zustand";
import randomstring from "randomstring";

//TODO need to determine the name, is it window or fucking app?

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
    maximized: boolean;
    component: () => JSX.Element;
}


interface AppsState {
    apps: App[];
    getWindow: (id: string) => App | undefined;
    updateWindow: (id: string, configs: Partial<App>) => void;
    toggleWindowVisibility: (appId: string, hidden?: boolean) => void;
    closeWindow: (appId: string) => void;
    setApps: (apps: App[]) => void;
    openApp: (component: () => JSX.Element, title: string) => void;
}

export const useAppsStore = create<AppsState>((set, get) => ({
    getWindow: (id: string) => (
        get().apps?.find((x) => x?.id === id)
    ),
    updateWindow: (id: string, configs: Partial<App>) => (
        set((state) => {
            const tempApps = state.apps;
            const appIndex = tempApps?.findIndex((x) => x?.id === id);
            if (appIndex !== undefined) {
                tempApps[appIndex] = {...tempApps[appIndex], ...configs};
            }
            
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
                maximized: false,
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