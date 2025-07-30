import {z} from "zod";
import {responseAPICategoriasSchema, responseAPIRecetas} from "../schemas/recetasSchema.ts";
export type BusquedaRecenta = {
    ingrediente: string,
    categoria: number
}
export type Categorias = z.infer<typeof responseAPICategoriasSchema>
export type Recetas = z.infer<typeof responseAPIRecetas>