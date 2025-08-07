import {z} from "zod";
import {responseAPICategoriasSchema, responseAPIReceta, responseAPIRecetas} from "../schemas/recetasSchema.ts";
export type BusquedaRecenta = {
    ingrediente: string,
    categoria: number
}
export type FormIA = {
    busqueda: string
}
export type Categorias = z.infer<typeof responseAPICategoriasSchema>
export type Recetas = z.infer<typeof responseAPIRecetas>
export type Drink = z.infer<typeof responseAPIReceta>
