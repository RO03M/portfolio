import { createTheme, PaletteColorOptions } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";
import create from "zustand";

export enum Languages {
    ENGLISH = "en",
    PORTUGUESE = "ptBr"
}

interface OSState {
    language: Languages,
    theme: Partial<DefaultTheme>;
    debugMode: boolean;
    toggleDebug: () => void;
}

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) => augmentColor({ color: { main: mainColor } });

export const useOSStore = create<OSState>()((set) => ({
    language: Languages.ENGLISH,
    theme: {
        palette: {
            mode: "dark"
        }
    },
    debugMode: false,
    toggleDebug: () => set((state) => ({ debugMode: !state.debugMode }))
}));