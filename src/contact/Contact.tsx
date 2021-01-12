import React from "react";
import s from './contact.module.css'
import styleContainer from "../common/styles/container.module.css";

export const Contact = () => {
  return (
    <div className={s.contactBlock}>
      <div className={`${styleContainer.container} ${s.contactContainer}`}>
        <h2>Contact</h2>
        <form className={s.contact}>
          <input type="text"/>
          <input type="text"/>
          <textarea/>
        </form>
        <button>Send Message</button>
      </div>
    </div>
  )
}
