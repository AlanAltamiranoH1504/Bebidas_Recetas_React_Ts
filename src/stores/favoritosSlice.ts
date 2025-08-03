import {StateCreator} from "zustand/vanilla";
import type {Recetas} from "../types";

export type FavoritosSliceType = {
    favoritos: Recetas[],
    handleClickFavorito: (receta: Recetas) => void
}

export const createFavoritosSlice: StateCreator<FavoritosSliceType> = (setState, getState, store) => ({
    favoritos: [],
    handleClickFavorito: (receta: Recetas) => {
        const existeFavorito = getState().favoritos.filter((favorito) => {
            return favorito.idDrink === receta.idDrink
        });
        if (existeFavorito.length > 0) {
            setState((state) => ({
                favoritos: state.favoritos.filter((favorito) => {
                    return favorito.idDrink !== receta.idDrink
                })
            }));
        } else {
            setState({
                favoritos: [
                    ...getState().favoritos,
                    receta
                ]
            });
        }
    }
});