import create from "zustand";
import { AppTypes } from "./apps";

interface DesktopItem {
    id: number;
    title: string;
    itemType: AppTypes;
}

interface DesktopState {
    items: DesktopItem[];
}

export const useDesktopStore = create<DesktopState>((set) => ({
    items: [
        {
            id: 0,
            title: "folder1",
            itemType: AppTypes.Folder
        },
        {
            id: 1,
            title: "folder2",
            itemType: AppTypes.Folder
        },
    ]
}));