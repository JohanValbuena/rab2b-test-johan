import { create } from "zustand";

interface LoadingState {
    isLoaded: boolean,
    setIsLoaded: (isLoaded: boolean) => void
}

export const useLoadedStore = create<LoadingState>()((set => ({
    isLoaded: false,
    setIsLoaded: (isLoaded) => set({isLoaded})
})))