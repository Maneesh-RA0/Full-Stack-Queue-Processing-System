import { create } from "zustand";

type UIState = {
    currentJobId: string | null;
    progress: Record<string, number>;
    setCurrentJobId: (id: string | null) => void;
    setProgress: (jobId: string, value: number) => void;
};

export const useUIStore = create<UIState>((set) => ({
    currentJobId: null,
    progress: {},
    setCurrentJobId: (id) => set({ currentJobId: id }),
    setProgress: (jobId, value) =>
        set((s) => ({ progress: { ...s.progress, [jobId]: value } })),
}));