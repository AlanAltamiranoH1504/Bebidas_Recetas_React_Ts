import {useAppStore} from "../stores/useAppStore.ts";

type DrikCardProps = {
    receta: {
        strDrink: string
        strDrinkThumb: string
        idDrink: string
    }
}
const DrinkCard = ({receta}: DrikCardProps) => {
    const {selectReceta} = useAppStore();

    function seleccionadoReceta(id: string) {
        selectReceta(id);
    }
    return (
        <>
            <div className="border shadow-lg">
                <div className="overflow-hidden">
                    <img className="hover:scale-125 transition-transform hover:rotate-2" src={receta.strDrinkThumb} alt={`Imagen de: ${receta.strDrink}`}/>
                </div>
                <div className="p-5">
                    <h2 className="text-2xl truncate font-black">{receta.strDrink}</h2>
                    <button type="button"
                            onClick={() => {
                                seleccionadoReceta(receta.idDrink)
                            }}
                            className="bg-orange-500 hover:bg-orange-600 mt-5 w-full p-3 rounded-lg text-white font-bold text-xl uppercase transition-colors duration-500">Detalles
                    </button>
                </div>
            </div>
        </>
    );
}
export default DrinkCard;