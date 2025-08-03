import {StateCreator} from "zustand/vanilla";
import type {Recetas} from "../types";

export type FavoritosSliceType = {
    favoritos: Recetas[]
}

export const createFavoritosSlice: StateCreator<FavoritosSliceType> = () => ({
    favoritos: []
});