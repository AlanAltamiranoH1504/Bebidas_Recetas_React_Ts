import {BrowserRouter, Routes, Route} from "react-router-dom";
import PaginaIndex from "./views/PaginaIndex.tsx";
import FavoritosView from "./views/FavoritosView.tsx";
import AppLayout from "./layouts/AppLayout.tsx";
import GenerateAI from "./views/GenerateIA.tsx";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<PaginaIndex/>}></Route>
                    <Route path="/favoritos" element={<FavoritosView/>}></Route>
                    <Route path="/ia" element={<GenerateAI/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;