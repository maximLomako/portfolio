import React from "react";
import s from './works.module.css'
import styleContainer from "../common/styles/container.module.css";
import {Work} from "./work/Work";

export const Works = () => {
  return (
    <div className={s.worksBlock}>
      <div className={`${styleContainer.container} ${s.worksContainer}`}>
        <h2 className={s.title}>Works</h2>
        <div className={s.works}>
          <Work title={'title'} description={'description'} />
          <Work title={'title'} description={'description'} />
        </div>
      </div>
    </div>
  )
}
