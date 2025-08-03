import {Dialog, Transition} from '@headlessui/react';
import {Fragment, type JSX} from 'react';
import {useAppStore} from "../stores/useAppStore.ts";
import type {Recetas} from "../types";

export default function Modal() {
    const {modal, drink, closeModel, handleClickFavorito, favoritos} = useAppStore();
    // @ts-ignore
    const receta = drink[0];
    const existeEnFavoritos = favoritos.some((favorito) => {
        return favorito.idDrink === receta.idDrink;
    });
    if (!receta) {
        return null;
    }

    const renderIngredientes = () => {
        const ingredientes: JSX.Element[] = [];
        for (let i = 1; i <= 6; i++){
            const ingrediente = receta[`strIngredient${i}` as keyof Recetas];
            const cantidad = receta[`strMeasure${i}` as keyof Recetas];

            if(ingrediente && cantidad) {
                ingredientes.push(
                    <li key={i} className="text-xl font-normal">
                        {ingrediente} - {cantidad}
                    </li>
                )
            }

        }
        return ingredientes;
    }

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => {
                    closeModel();
                }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                                    <Dialog.Title as="h3"
                                                  className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                                        {receta.strDrink}
                                    </Dialog.Title>
                                    <img src={receta.strDrinkThumb}/>
                                    <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        Ingredientes y Cantidades
                                    </Dialog.Title>
                                    {renderIngredientes()}
                                    <Dialog.Title as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                        Instrucciones
                                    </Dialog.Title>
                                    <p className="text-lg">{receta.strInstructions}</p>

                                    <div className="mt-5 flex justify-between gap-2">
                                        <button
                                            onClick={() => {
                                                handleClickFavorito(receta);
                                            }}
                                            type="button"
                                            className={existeEnFavoritos ? "w-full rounded bg-red-600 p-3 font-bold uppercase text-white shadow-md hover:bg-red-700 transition-colors duration-500": "w-full rounded bg-orange-500 p-3 font-bold uppercase text-white shadow-md hover:bg-orange-600 transition-colors duration-500"}
                                            // className="w-full rounded bg-orange-500 p-3 font-bold uppercase text-white shadow-md hover:bg-orange-600 transition-colors duration-500"
                                        >{existeEnFavoritos ? "Eliminar de favoritos": "Agregar a Favoritos"}</button>
                                        <button
                                            onClick={() => {
                                                closeModel();
                                            }}
                                            type="button"
                                            className="w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow-md hover:bg-gray-500 transition-colors duration-500"
                                        >Cerrar</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}