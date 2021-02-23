import React from "react";
import s from "./Menu.module.css"
import {NavLink} from "react-router-dom";
import base from "../../assets/images/base.png"
import tasks from "../../assets/images/tasks.png"
import assets from "../../assets/images/actives.png"
import settings from "../../assets/images/settings.png"
import clients from "../../assets/images/clients.png"
import employees from "../../assets/images/employees.png"
import logo from "../../assets/images/logo.png";

const Menu = () => {
    const imgHeight = 23;
    return (
        <nav className={s.menu}>
           <div className={s.menuContainer}>
               <div className={s.logo}>
                   <img src={logo} alt="logo" height={45}/>
               </div>
               <NavLink className={s.item} to={"/base"} activeClassName={s.active}>
                   <img src={base} alt="base" height={imgHeight}/>
                   <span>База знаний</span>
               </NavLink>
               <NavLink className={s.item} to={"/tasks"} activeClassName={s.active}>
                   <img src={tasks} alt="tasks" height={imgHeight}/>
                   <span>Заявки</span>
               </NavLink>
               <NavLink className={s.item} to={"/employees"} activeClassName={s.active}>
                   <img src={employees} alt="employees" height={imgHeight}/>
                   <span>Сотрудники</span>
               </NavLink>
               <NavLink className={s.item} to={"/clients"} activeClassName={s.active}>
                   <img src={clients} alt="clients" height={imgHeight}/>
                   <span>Клиенты</span>
               </NavLink>
               <NavLink className={s.item} to={"/assets"} activeClassName={s.active}>
                   <img src={assets} alt="assets" height={imgHeight}/>
                   <span>Активы</span>
               </NavLink>
               <NavLink className={s.item} to={"/settings"} activeClassName={s.active}>
                   <img src={settings} alt="settings" height={imgHeight}/>
                   <span>Настройки</span>
               </NavLink>
           </div>
        </nav>
    )
}
export default Menu;