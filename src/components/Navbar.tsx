import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="w-full h-screen fixed bg-blue-600 bg-opacity-100 text-[#FFFFFFB3] flex flex-col justify-center space-y-4 items-center">
          <NavLink className="mr-5 font-bold cursor-pointer" to="/">
            PRESENTATION
          </NavLink>
          <br />
          <NavLink className="mr-5 font-bold cursor-pointer" to="/parcours">
            PARCOURS
          </NavLink>
          <br />
          <NavLink className="mr-5 font-bold cursor-pointer" to="/projets">
            PROJETS
          </NavLink>
          <br />
          <NavLink className="mr-5 font-bold cursor-pointer" to="/contact">
            CONTACT
          </NavLink>
      </nav>
  )
}
