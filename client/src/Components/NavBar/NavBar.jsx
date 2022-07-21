import React from "react";
import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";

function NavBar() {

  return (
    <div className={css.container}>
      <div>
        <NavLink to={"/"} style={{ textDecoration: "none" }}>
          <span className={css.btn}>Home</span>
        </NavLink>
        <NavLink to={"/admin"} style={{ textDecoration: "none" }}>
          <span className={css.btn}>Admin</span>
        </NavLink>
        
      </div>

      
    </div>
  );
}

export default NavBar;