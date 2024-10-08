import React from "react";
import create from "zustand";
import { BrowserApp } from "../../components/Apps/apps";
import PlaceholderApp from "../../components/Apps/PlaceholderApp";

import { chrome, setting } from "../../components/Apps/assets/icons/icons";
import UnderConstructionApp from "../../components/Apps/UnderContructionApp";

export interface DesktopItem {
    id: number;
    icon?: string;
    gridX: number;
    gridY: number;
    title: string;
    appComponent: () => JSX.Element;
}

interface ItemsState {
    items: DesktopItem[];
    updateItemPosition: (id:number, gridX: number, gridY: number) => void;
    isGridOccupied: (id: number, gridX: number, gridY: number) => boolean;
}

export const useItemsStore = create<ItemsState>((set, get) => ({
    isGridOccupied: (id:number, gridX: number, gridY: number) => {
        const items = get().items;
        return items.findIndex((item) => item.id !== id && item.gridX === gridX && item.gridY === gridY) !== -1;
    },
    updateItemPosition: (id:number, gridX: number, gridY: number) => (
        set(({ items }) => {
            const tempItems = items;
            const itemIndex = tempItems.findIndex((item) => item.id === id);

            if (!get().isGridOccupied(id, gridX, gridY)) {
                tempItems[itemIndex].gridX = gridX;
                tempItems[itemIndex].gridY = gridY;
            }
            
            return {
                items: [...tempItems]
            };
        })
    ),
    items: [
        {
            id: 1,
            icon: chrome,
            gridX: 0,
            gridY: 0,
            title: "Google Chrome",
            appComponent: BrowserApp
        },
        {
            id: 2,
            icon: setting,
            gridX: 0,
            gridY: 1,
            title: "Configurações",
            appComponent: UnderConstructionApp
        },
    ]
}));