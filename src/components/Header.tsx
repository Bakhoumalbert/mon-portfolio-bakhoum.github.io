import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Supprime la classe "active" de tous les liens
        navLinks.forEach(navLink => {
          navLink.classList.remove('active');
        });

        // Ajoute la classe "active" au lien cliqué
        link.classList.add('active');
      });
    });
  }, []);

  return (
    <nav className="relative w-full md:flex hidden h-20 p-4 bg-[#fff] text-[#5F6F81] rounded-t-full justify-center items-center">
      <ul className="w-full p-2 text-[#5F6F81] text-xl flex justify-around mx-10">
        <li>
          <NavLink
            to="/"
            className="nav-link cursor-pointer hover:text-[#304CFD] nav-link"
            // activeClassName="bg-blue-700 text-white"
            // exact
          >
            PRESENTATION
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link cursor-pointer hover:text-[#304CFD] nav-link" to="/parcours">
            PARCOURS
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link cursor-pointer hover:text-[#304CFD] nav-link" to="/projets">
            PROJETS
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link cursor-pointer hover:text-[#304CFD] nav-link" to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
