import {create} from "zustand/react";
import {devtools} from "zustand/middleware"
import {createRecetasSlice, type RecetasSliceType} from "./recetasSlice.ts";

export const useAppStore = create<RecetasSliceType>()(devtools((...a) => ({
    ...createRecetasSlice(...a)
})))