import React, { useEffect } from "react";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useState } from "react";
import { useSelector } from "react-redux";
import { use } from "react";
const themes={
  winter:'winter',
  dracula:'dracula',
}
const getThemeFromLocalStorage=()=>{
  return localStorage.getItem('theme') || themes.winter
}
const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const handleTheme=() => {
    const {winter,dracula}=themes
    const newTheme=theme===winter?dracula:winter
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme);
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  const numItemsInCart=useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* {TITLE} */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z[1] p-2 shadow bg-base-200 roundex-box w-52"
            >
             <NavLinks/>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
      <NavLinks/>

          </ul>
        </div>
        <div className="navbar-end"></div>
        {/* {THEME SETUP} */}
        <label className="swap swap-rotate">
      <input type="checkbox" onChange={handleTheme}/>
      {/* {sun} */}
      <BsSunFill className="swap-on  h-4 w-4" />
      {/* {moon} */}
      <BsMoonFill className="swap-off h-4 w-4" />
        </label>
        {/* {CART LINK} */}
        <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
          <div className="indicator">
            <BsCart3 className="h6 w-6" />
            <span className="badge badge-sm badge-primary indicator-item">
              {numItemsInCart}
            </span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;