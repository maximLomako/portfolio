import React from "react";
import s from './main.module.css'
import styleContainer from '../common/styles/container.module.css'


export const Main = () => {
  return (
    <div className={s.main}>
      <div className={`${styleContainer.container} ${s.mainContainer}`}>
        <div className={s.content}>
          <span>Hi There</span>
          <h1>I am Maxim Lomako</h1>
          <p>A Frontend Developer</p>
        </div>
        <div className={s.photo}>
          <img src="https://data.whicdn.com/images/161249781/original.jpg" alt="mainPhoto"/>
        </div>
      </div>

    </div>
  )
}
