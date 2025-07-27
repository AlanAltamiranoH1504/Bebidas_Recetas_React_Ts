import axios from 'axios';
import {responseAPICategoriasSchema} from "../schemas/recetasSchema.ts";

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
    }catch (e) {
        throw e;
    }
}