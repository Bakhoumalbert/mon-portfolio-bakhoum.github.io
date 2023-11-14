import {  NavLink, useLocation } from 'react-router-dom'; // Supposons que vous utilisez react-router-dom pour la navigation

export const Header = () => {
  const location = useLocation();

  const isActive = (pathname: string) => {
    return location.pathname === pathname ? 'text-white p-1 md:p-2 bg-[#304CFD] rounded-2xl hover:text-white' : 'text-gray-500';
  };
  return (
    <nav className="w-full h-20 px-10 bg-[#fff] text-[#5F6F81] border-b border-[#5F6F81] rounded-t-full flex justify-center items-center">
      <ul className="w-full text-[#5F6F81] text-xl lg:text-2xl flex justify-around mx-10 sm:space-x-2 md:space-x-3 lg:space-x-4 items-center">
        <li>
          <NavLink
            to="/"
            className={`block cursor-pointer hover:text-[#304CFD] ${isActive('/')}`}
            // activeClassName="bg-blue-700 text-white"
            // exact
          >
            PRESENTATION
          </NavLink>
        </li>
        <li>
          <NavLink to="parcours" className={`block cursor-pointer hover:text-[#304CFD] ${isActive('/parcours')}`}>
            PARCOURS
          </NavLink>
        </li>
        <li>
          <NavLink className={`block cursor-pointer hover:text-[#304CFD] ${isActive('/projets')}`} to="/projets">
            PROJETS
          </NavLink>
        </li>
        <li>
          <NavLink className={`block cursor-pointer hover:text-[#304CFD] ${isActive('/contact')}`} to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};