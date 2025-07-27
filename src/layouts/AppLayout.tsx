import {Outlet} from "react-router-dom";
import Header from "../components/Header.tsx";
const AppLayout = () => {
    return (
        <>
            <Header/>
            <main className="max-w-6xl mx-auto py-16 font-fjalla">
                <Outlet/>
            </main>
        </>
    );
}
export default AppLayout;