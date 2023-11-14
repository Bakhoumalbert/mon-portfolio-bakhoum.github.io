import { NavLink, useLocation } from "react-router-dom"

export const Navbar = () => {
  const location = useLocation();

  const isActive = (pathname: string) => {
    return location.pathname === pathname ? 'text-blue-700 mr-5 font-bold rounded-xl  bg-white p-1 hover:text-blue-950' : 'text-white';
  };
  return (
    <nav className="w-screen h-screen fixed bg-blue-600 bg-opacity-100 text-[#FFFFFFB3] flex flex-col justify-center items-center px-20">
          <NavLink className={`mr-5 font-bold cursor-pointer hover:text-white ${isActive("/")}`} to="/">
            PRESENTATION
          </NavLink>
          <br />
          <NavLink className={`mr-5 font-bold cursor-pointer hover:text-white ${isActive('/parcours')}`} to="/parcours">
            PARCOURS
          </NavLink>
          <br />
          <NavLink className={`mr-5 font-bold cursor-pointer hover:text-white ${isActive('/projets')}`} to="/projets">
            PROJETS
          </NavLink>
          <br />
          <NavLink className={`mr-5 font-bold cursor-pointer hover:text-white ${isActive('/contact')}`} to="/contact">
            CONTACT
          </NavLink>
      </nav>
  )
}
