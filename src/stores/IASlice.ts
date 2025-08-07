import type {StateCreator} from "zustand/vanilla";
import type {FormIA} from "../types";
import {getResponseIA} from "../services/IAService.ts";

export type IASliceType = {
    receta: string,
    fetchBusquedaIA(data: FormIA): void
}
export const createIASlice: StateCreator<IASliceType, [], [], IASliceType> = (set) => ({
    receta: "",
    fetchBusquedaIA: async (data: FormIA) => {
        const resultadoAPI = await getResponseIA(data);
        console.log(resultadoAPI)
    }
});