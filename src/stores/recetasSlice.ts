import type {StateCreator} from "zustand/vanilla";
import {getCategorias} from "../services/RecetasService.ts";
import type {Categorias} from "../types";

export type RecetasSliceType = {
    categorias: Categorias,
    fetchCategorias(): void
}
export const createRecetasSlice: StateCreator<RecetasSliceType> = (set) => ({
    categorias: {
        drinks: []
    },
    fetchCategorias: async () => {
        const categorias = await getCategorias();
        set({
            categorias
        })
    }
})