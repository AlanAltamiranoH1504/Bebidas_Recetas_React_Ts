import axios from 'axios';
import {responseAPICategoriasSchema, responseAPIRecetas} from "../schemas/recetasSchema.ts";
import type {BusquedaRecenta} from "../types";

export async function getCategorias() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
    // eslint-disable-next-line no-useless-catch
    try {
        const {data} = await axios.get(url);
        const result = responseAPICategoriasSchema.safeParse(data);
        if (result.success) {
            return data;
        } else {
            console.log("Error en peticion de categorias")
        }
    } catch (e) {
        throw e;
    }
}

export async function getRecetas(data: BusquedaRecenta) {
    const urlByCategoria = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${data.categoria}&i=${data.ingrediente}`;
    // eslint-disable-next-line no-useless-catch
    try {
        const {data} = await axios.get(urlByCategoria);
        const result = responseAPIRecetas.safeParse(data);
        if (result.success) {
            return data;
        } else {
            console.log("Error en busqueda de recetas");
        }
    } catch (e) {
        throw e;
    }
}