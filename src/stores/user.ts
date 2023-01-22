import create from "zustand";

interface UserStore {
    name: string;
}

export const useUserStore = create<UserStore>()((set) => ({
    name: "Admin"
}));