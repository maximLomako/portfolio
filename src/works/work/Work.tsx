import React from "react";
import s from './work.module.css'

type SkillPropsType = {
  title: string
  description: string
}

export const Work:React.FC<SkillPropsType> = (props) => {
  return (
    <div className={s.work}>
      <div className={s.image}>
        <button className={s.btn}>Watch</button>
      </div>
      <h3 className={s.title}>{props.title}</h3>
      <span className={s.description}>{props.description}</span>
    </div>
  )
}
