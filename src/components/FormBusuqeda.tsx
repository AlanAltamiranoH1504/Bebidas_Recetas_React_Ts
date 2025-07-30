import {useForm} from "react-hook-form";
import type {BusquedaRecenta} from "../types";
import {useAppStore} from "../stores/useAppStore.ts";
import {useEffect} from "react";

const FormBusuqeda = () => {
    const {fetchCategorias, categorias, searchRecetas} = useAppStore();
    const {register, handleSubmit, formState: {errors}} = useForm<BusquedaRecenta>();

    function peticionBusquedaRecentas(data: BusquedaRecenta) {
        searchRecetas(data);
    }

    useEffect(() => {
        fetchCategorias();
    }, [])

    return (
        <>
            <div className="px-5 py-5 rounded-lg 0">
                <form
                    onSubmit={handleSubmit(peticionBusquedaRecentas)}
                    className="bg-white px-5 py-2 space-y-5 rounded-md shadow-md md:w-1/2 2xl:w-1/3">
                    <h2 className=" font-fjalla text-center text-3xl mb-3 mt-3 uppercase">Busqueda</h2>
                    <div>
                        <label htmlFor="ingrediente" className="text-xl block mb-2">Nombre o Ingredientes:</label>
                        <input type="text" id="ingrediente"
                               className="border p-2 w-full rounded-lg border-2 border-gray-300"
                               placeholder="Ej. Tequila, Vodka"
                               {...register("ingrediente", {
                                   required: "El ingrediente base de la bebida es obligatorio."
                               })}
                        />
                        <div className="bg-red-100 text-center text-red-600 mt-1 rounded-md">
                            {errors.ingrediente && String(errors.ingrediente.message)}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="categoria" className="text-xl block mb-2">Categoria:</label>
                        <select
                            id="categoria"
                            className="border p-2 w-full rounded-lg border-2 border-gray-300"
                            {...register("categoria", {
                                required: "La categoria es obligatoria."
                            })}
                        >
                            <option value="">--- Selecciona una Opción ---</option>
                            {categorias.drinks.map((categoria) => {
                                return (
                                    <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>
                                );
                            })}
                        </select>
                        <div className="bg-red-100 text-center text-red-600 mt-1 rounded-md">
                            {errors.categoria && String(errors.categoria.message)}
                        </div>
                    </div>
                    <div>
                        <input type="submit"
                               className="text-xl border p-2 mb-3 w-full rounded-lg uppercase bg-orange-500 hover:bg-orange-600 transition-colors duration-500 text-white cursor-pointer"
                               value="Buscar Recetas"/>
                    </div>
                </form>
            </div>
        </>
    );
}
export default FormBusuqeda;