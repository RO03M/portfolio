import create from "zustand";

export enum AppTypes {
    Folder,
    TextEditor
}

interface App {
    id: number;
    x: number;
    y: number;
    title: string;
    hidden: boolean;
    type: AppTypes;
}


interface AppsState {
    apps: App[];
    updateWindow: (id: number, configs: Partial<App>) => void;
    toggleWindowVisibility: (appId: number, hidden?: boolean) => void;
    closeWindow: (appId: number) => void;
}

export const useAppsStore = create<AppsState>((set) => ({
    updateWindow: (id: number, configs: Partial<App>) => (
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
    toggleWindowVisibility: (appId: number, hidden?: boolean) => (
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
    closeWindow: (appId: number) => (
        set((state) => {
            const tempApps = state.apps.filter(app => app.id !== appId);
            
            return {
                apps: [...tempApps]
            };
        })
    ),
    apps: [
        // {
        //     id: 0,
        //     x: 100,
        //     y: 100,
        //     hidden: false,
        //     title: "Janela 1",
        //     type: AppTypes.Folder
        // },
        // {
        //     id: 1,
        //     x: 100,
        //     y: 100,
        //     hidden: false,
        //     title: "Janela 2",
        //     type: AppTypes.Folder
        // },
    ]
}));