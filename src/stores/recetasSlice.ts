import type {StateCreator} from "zustand/vanilla";
import {getCategorias, getRecetas} from "../services/RecetasService.ts";
import type {BusquedaRecenta, Categorias, Recetas} from "../types";

export type RecetasSliceType = {
    categorias: Categorias,
    recetas: Recetas,
    fetchCategorias(): void,
    searchRecetas(data: BusquedaRecenta): Promise<void>
}
export const createRecetasSlice: StateCreator<RecetasSliceType> = (set) => ({
    categorias: {
        drinks: []
    },
    recetas: {
        drinks: []
    },
    fetchCategorias: async () => {
        const categorias = await getCategorias();
        set({
            categorias
        });
    },
    searchRecetas: async (data: BusquedaRecenta) => {
        const recetas = await getRecetas(data);
        set({
            recetas
        });
    }
})