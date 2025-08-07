import type {StateCreator} from "zustand/vanilla";
import type {FormIA} from "../types";
import {getResponseIA} from "../services/IAService.ts";

export type IASliceType = {
    receta: string,
    isGenerating: boolean,
    fetchBusquedaIA(data: FormIA): void
}
export const createIASlice: StateCreator<IASliceType, [], [], IASliceType> = (set) => ({
    receta: "",
    isGenerating: false,
    fetchBusquedaIA: async (data: FormIA) => {
        set({
            receta: "",
            isGenerating: true
        });
        const resultadoAPI = await getResponseIA(data);
        for await (const textPart of resultadoAPI) {
            set((state) => ({
                receta: state.receta + textPart
            }));
        }
        set({
            isGenerating: false
        });
    }
});