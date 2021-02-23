import React from "react";
import s from "./Header.module.css";
const Header = () => {
    return (
        <header className={s.header}>
            <div >
                <input className={s.search} type="text"/>
            </div>
        </header>
    )
}
export default Header;