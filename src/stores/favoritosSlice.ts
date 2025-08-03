// @ts-ignore
import {StateCreator} from "zustand/vanilla";
import type {Recetas} from "../types";

export type FavoritosSliceType = {
    favoritos: Recetas[],
    handleClickFavorito: (receta: Recetas) => void
}

export const createFavoritosSlice: StateCreator<FavoritosSliceType> = (setState, getState) => ({
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
        // localStorage.setItem("favoritos", JSON.stringify(getState().favoritos));
    },
    // cargarFavoritosLocalStorage: () => {
    //     const favoritosStorage = localStorage.getItem("favoritos");
    //     if (favoritosStorage) {
    //         setState({
    //             favoritos: JSON.parse(favoritosStorage)
    //         });
    //     }
    // }
});