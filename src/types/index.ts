import {z} from "zod";
import {responseAPICategoriasSchema} from "../schemas/recetasSchema.ts";
export type BusquedaRecenta = {
    ingrediente: string,
    categoria: number
}
export type Categorias = z.infer<typeof responseAPICategoriasSchema>