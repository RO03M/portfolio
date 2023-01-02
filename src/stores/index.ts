import { DefaultTheme } from "@mui/private-theming";
import create from "zustand";


interface OSState {
    theme: Partial<DefaultTheme>;
    debugMode: boolean;
    toggleDebug: () => void;
}

export const useOSStore = create<OSState>()((set) => ({
    theme: {
        palette: {
            mode: "dark"
        }
    },
    debugMode: false,
    toggleDebug: () => set((state) => ({ debugMode: !state.debugMode }))
}));