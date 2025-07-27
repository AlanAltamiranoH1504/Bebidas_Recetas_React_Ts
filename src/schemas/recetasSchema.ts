import {z} from "zod"

export const responseAPICategoriasSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
});