import {create} from "zustand/react";
import {devtools} from "zustand/middleware"
import {createRecetasSlice, type RecetasSliceType} from "./recetasSlice.ts";
import {createFavoritosSlice, type FavoritosSliceType} from "./favoritosSlice.ts";

export const useAppStore = create<RecetasSliceType & FavoritosSliceType>()(devtools((...a) => ({
    ...createRecetasSlice(...a),
    ...createFavoritosSlice(...a)
})))