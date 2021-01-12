import React from "react";
import s from './skills.module.css'
import styleContainer from "../common/styles/container.module.css";
import {Skill} from "./skill/Skill";

export const Skills = () => {
  return (
    <div className={s.skillsBlock}>
      <div className={`${styleContainer.container} ${s.skillsContainer}`}>
        <h2 className={s.title}>Skills</h2>
        <div className={s.skills}>
          <Skill
            title={'js'}
            description={'Lorem ipsum dolor sit amet, consec'}/>
          <Skill
            title={'js'}
            description={'Lorem ipsum dolor sit atque cum dolor earum praesentium ullam'}/>
          <Skill
            title={'js'}
            description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam, '}/>
        </div>
      </div>
    </div>
  )
}
