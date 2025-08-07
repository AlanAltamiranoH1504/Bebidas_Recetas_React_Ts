import {useForm} from "react-hook-form";
import type {FormIA} from "../types";
import {useAppStore} from "../stores/useAppStore.ts";

export default function GenerateAI() {
    const {register, handleSubmit, formState: {errors}} = useForm<FormIA>();
    const {fetchBusquedaIA} = useAppStore();

    const busquedaPromtp = (data: FormIA) => {
        fetchBusquedaIA(data);
    }
    return (
        <>
            <h1 className="text-6xl font-extrabold">Generar Receta con IA</h1>

            <div className="max-w-4xl mx-auto">
                <form
                    onSubmit={handleSubmit(busquedaPromtp)}
                    className='flex flex-col space-y-3 pt-10'
                >
                    <div className="relative">
                        <input
                            id="prompt"
                            className="border bg-white p-4 rounded-lg w-full border-slate-800"
                            placeholder="Genera una receta con ingredientes. Ej. Bebida con Tequila y Fresa"
                            {...register("busqueda", {
                                required: "El prompt de busqueda es obligatorio"
                            })}
                        />
                        <button
                            type="submit"
                            aria-label="Enviar"
                            className={`cursor-pointer absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                        </button>

                    </div>
                </form>
                <div className="bg-red-100 text-center text-red-600 rounded-md my-2">
                    {errors.busqueda && String(errors.busqueda.message)}
                </div>

                <div className="py-10 whitespace-pre-wrap">

                </div>
            </div>

        </>
    )
}
