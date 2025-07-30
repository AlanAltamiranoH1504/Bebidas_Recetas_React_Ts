import {z} from "zod"

export const responseAPICategoriasSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
});

export const responseAPIRecetas = z.object({
    drinks: z.array(
        z.object({
            strDrink: z.string(),
            strDrinkThumb: z.string(),
            idDrink: z.string()
        })
    )
})

export const searchFilterSchema = z.object({
    ingrediente: z.string(),
    categoria: z.string()
});