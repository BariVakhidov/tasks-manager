import React from "react";
import s from "./EditTask/EditTask.module.css"

const Tag = ({name}) => {
    return (
        <div className={s.tag}>
            {name}
        </div>
    )
}
export default Tag;