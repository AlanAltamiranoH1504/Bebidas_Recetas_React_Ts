import {useAppStore} from "../stores/useAppStore.ts";
import DrinkCard from "../components/DrinkCard.tsx";

const FavoritosView = () => {
    const {favoritos} = useAppStore();
    return (
        <>
            {favoritos.length > 0 ? (
                <>
                    <h1 className="text-6xl font-extrabold font-fjalla">Recetas Favoritas</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 my-10 gap-10 rounded-lg">
                        {favoritos.map((favorito) => {
                            return (
                                <DrinkCard key={favorito.idDrink} receta={favorito}/>
                            )
                        })}
                    </div>
                </>
            ):(
                <>
                    <h2>No hay favoritos disponibles</h2>
                </>
            )}
        </>
    );
}
export default FavoritosView;