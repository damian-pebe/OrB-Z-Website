import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
};

type State = {
  user: User | null;
  setUser: (u: User) => void;
  clearUser: () => void;
};

export const useUserStore = create<State>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
