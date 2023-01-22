import React from "react";
import create from "zustand";
import PlaceholderApp from "../../components/Apps/PlaceholderApp";

interface Item {
    id: number;
    gridX: number;
    gridY: number;
    title: string;
    appComponent: () => JSX.Element;
}

interface ItemsState {
    items: Item[];
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
            gridX: 0,
            gridY: 0,
            title: "item",
            appComponent: PlaceholderApp
        },
        {
            id: 2,
            gridX: 0,
            gridY: 1,
            title: "item",
            appComponent: PlaceholderApp
        },
        {
            id: 3,
            gridX: 0,
            gridY: 2,
            title: "item",
            appComponent: PlaceholderApp
        },
    ]
}));