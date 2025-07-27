import {NavLink, useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <>
            <header className="bg-slate-800 mx-auto container px-5 py-16 font-fjalla">
                <div className="md:flex justify-between items-center">
                    <div>
                        <img src="/logo.svg" alt="Logotipo Aplicacion" className="w-32"/>
                    </div>
                    <nav className="md:flex md:gap-5 space-x-5">
                        <NavLink
                            to="/"
                            // className="text-white uppercase text-xl hover:text-gray-300 transition-colors duration-500"
                            className={({isActive}) =>
                                isActive ? "text-orange-500 uppercase text-xl hover:text-orange-600 transition-colors duration-500" : "text-white uppercase text-xl hover:text-gray-300 transition-colors duration-500"
                            }
                        >Inicio</NavLink>
                        <NavLink
                            to="/favoritos"
                            // className="text-white uppercase text-xl hover:text-gray-300 transition-colors duration-500"
                            className={({isActive}) =>
                                isActive ? "text-orange-500 uppercase text-xl hover:text-orange-600 transition-colors duration-500" : "text-white uppercase text-xl hover:text-gray-300 transition-colors duration-500"
                            }
                        >Favoritos</NavLink>
                    </nav>
                </div>
            </header>
        </>
    );
}
export default Header;