import {useAppStore} from "../stores/useAppStore.ts";
import DrinkCard from "../components/DrinkCard.tsx";

const PaginaIndex = () => {
    const {recetas} = useAppStore();

    return (
        <>
            <h1 className="text-6xl font-extrabold font-fjalla">Recetas</h1>

            {recetas.drinks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10 rounded-lg">
                    {recetas.drinks.map((receta) => (
                        <DrinkCard
                            key={receta.idDrink}
                            receta={receta}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center mt-10">
                    Busca algunas recetas en el formulario
                </p>
            )}
        </>
    );
}
export default PaginaIndex;
