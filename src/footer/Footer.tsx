import React from "react";
import s from './footer.module.css'
import styleContainer from "../common/styles/container.module.css";

export const Footer = () => {
  return (
    <div className={s.footerBlock}>
      <div className={`${styleContainer.container} ${s.footerContainer}`}>
        <h2>Maxim Lomako</h2>
        <div className={s.footer}>
          <a href="#">social</a>
          <a href="#">social</a>
          <a href="#">social</a>
          <a href="#">social</a>
        </div>
        <span>© 2021 beingeorge, All Rights Reserved.</span>
      </div>
    </div>
  )
}
