import React from "react";
import { DefaultTheme } from "@mui/private-theming";
import create from "zustand";

export interface WindowsStoreInfos {
    id: number;
    x: number;
    y: number;
    hidden: boolean;
}

interface OSState {
    theme: Partial<DefaultTheme>;
    debugMode: boolean;
    toggleDebug: () => void;
    updateWindow: (id: number, configs: Partial<WindowsStoreInfos>) => void;
    closeWindow: (windowId: number) => void;
    windows: WindowsStoreInfos[];
}

export const useOSStore = create<OSState>()((set) => ({
    theme: {
        palette: {
            mode: "dark"
        }
    },
    debugMode: false,
    toggleDebug: () => set((state) => ({ debugMode: !state.debugMode })),
    updateWindow: (id: number, configs: Partial<WindowsStoreInfos>) => (
        set((state) => {
            const tempWindows = state.windows;
            const windowIndex = tempWindows?.findIndex((x) => x?.id === id);

            if (windowIndex !== undefined && configs?.x) tempWindows[windowIndex].x = configs.x;
            if (windowIndex !== undefined && configs?.y) tempWindows[windowIndex].y = configs.y;
            if (windowIndex !== undefined && configs?.hidden) tempWindows[windowIndex].hidden = configs.hidden;
            
            return {
                windows: tempWindows
            };
        })
    ),
    closeWindow: (windowId: number) => (
        set((state) => {
            const tempWindows = state.windows.filter(window => window.id !== windowId);
            console.log(tempWindows);
            return {
                windows: tempWindows
            };
        })
    ),
    windows: [
        {
            id: 0,
            x: 100,
            y: 100,
            hidden: false
        },
        {
            id: 1,
            x: 100,
            y: 100,
            hidden: false
        },
    ]
}));