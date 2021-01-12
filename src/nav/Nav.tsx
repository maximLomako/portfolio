import React from "react";
import s from './nav.module.css'
import styleContainer from "../common/styles/container.module.css";

export const Nav = () => {
  return (
    <div className={`${styleContainer.container} ${s.navContainer}`}>
      <div className={s.nav}>
        <a href="#">Main</a>
        <a href="#">Skills</a>
        <a href="#">Work</a>
        <a href="#">Contacts</a>
      </div>
    </div>
  )
}
