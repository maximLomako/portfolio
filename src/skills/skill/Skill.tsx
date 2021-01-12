import React from "react";
import s from './skill.module.css'

type SkillPropsType = {
  title: string
  description: string
}

export const Skill:React.FC<SkillPropsType> = (props) => {
  return (
    <div className={s.skill}>
      <div className={s.icon}>props.icon</div>
      <h3 className={s.title}>{props.title}</h3>
      <span className={s.description}>{props.description}</span>
    </div>
  )
}
