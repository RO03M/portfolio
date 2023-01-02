import create from "zustand";

export enum Stacks {
    GroupApps,
    ShowAllWhenPossible,
    AlwaysShowAll
}

interface DockSettingsState {
    stackMode: Stacks,
}

export const useDockSettingsStore = create<DockSettingsState>((set) => ({
    stackMode: Stacks.AlwaysShowAll
}));