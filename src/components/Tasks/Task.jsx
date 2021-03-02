import React from "react";
import s from "./Tasks.module.css"

const Task = ({task,requestTask, editMode, newTaskMode}) => {
   /* let priority = priorities.filter(p => p.id === task.priorityId)[0];*/
    return (
        <>
            {task &&
            <>
                <div className={s.task} style={{borderLeft:(task.statusRgb+" 5px solid")}} onClick={editMode === false && newTaskMode===false ? () => requestTask(task.id) : undefined}>
                    <div className={s.taskId} >
                        {task.id}
                    </div>
                    <div className={s.title}>
                        {task.name}
                    </div>
                    <div className={s.status}>
                        <div className={s.statusRGB} style={{backgroundColor:task.statusRgb}}>{task.statusName}</div>
                    </div>
                    <div className={s.executor}>
                        {task.executorName}
                    </div>
                </div>
                </>}
        </>
    )
}
export default Task;