import {Outlet} from "react-router-dom";
import Header from "../components/Header.tsx";
import Modal from "../components/Modal.tsx";
// import {useEffect} from "react";
// import {useAppStore} from "../stores/useAppStore.ts";
const AppLayout = () => {
    // const {cargarFavoritosLocalStorage} = useAppStore();
    // useEffect(() => {
    //     cargarFavoritosLocalStorage();
    // }, []);
    return (
        <>
            <Header/>
            <main className="max-w-6xl mx-auto py-16 font-fjalla">
                <Outlet/>
            </main>
            <Modal/>
        </>
    );
}
export default AppLayout;