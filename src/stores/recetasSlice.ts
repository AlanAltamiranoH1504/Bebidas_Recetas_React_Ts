import type {StateCreator} from "zustand/vanilla";
import {getCategorias, getRecetaById, getRecetas} from "../services/RecetasService.ts";
import type {BusquedaRecenta, Categorias, Drink, Recetas} from "../types";

export type RecetasSliceType = {
    categorias: Categorias,
    recetas: Recetas,
    drink: Drink,
    modal: boolean,
    fetchCategorias(): void,
    searchRecetas(data: BusquedaRecenta): Promise<void>,
    selectReceta(idReceta: string): void,
    closeModel(): void
}
export const createRecetasSlice: StateCreator<RecetasSliceType> = (set) => ({
    categorias: {
        drinks: []
    },
    recetas: {
        drinks: []
    },
    drink: {
        drinks: []
    },
    modal: false,
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
    },
    selectReceta: async (idReceta: string) => {
        const {drinks} = await getRecetaById(idReceta);
        set({
            drink: drinks,
            modal: true
        });
    },
    closeModel: () => {
        set({
            modal: false
        })
    }
})