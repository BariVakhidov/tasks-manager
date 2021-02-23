import React, {useState} from "react";
import s from "./Tasks.module.css"
import Task from "./Task";
import NewTask from "./NewTask/NewTask";
import EditTask from "./EditTask/EditTask";

const Tasks = (props) => {
    let [newTaskEditMode, setNewTaskEditMode] = useState(false);
    const activateNewTaskEditMode = () => {
        setNewTaskEditMode(true);
    }
    const deactivateNewTaskEditMode = () => {
        setNewTaskEditMode(false);
    }
    return (
        <div className={s.tasks}>
            <button onClick={activateNewTaskEditMode} disabled={newTaskEditMode}>Создать заявку</button>
            {newTaskEditMode &&
            <NewTask createTask={props.createTask} deactivateNewTaskEditMode={deactivateNewTaskEditMode}/>}
            <div className={s.tasksCont}>
                <div className={s.task}>
                    <div className={s.taskId} style={{borderLeft: "1px #dae0e7 solid"}}>
                        ID
                    </div>
                    <div className={s.title} style={{borderLeft: "1px #dae0e7 solid"}}>
                        Название
                    </div>
                    <div className={s.status} style={{borderLeft: "1px #dae0e7 solid"}}>
                        Статус
                    </div>
                    <div className={s.executor} style={{borderLeft: "1px #dae0e7 solid"}}>
                        Исполнитель
                    </div>
                </div>
                {props.tasks.map(t => <Task priorities={props.priorities} requestTask={props.requestTask} key={t.id}
                                            task={t} editMode={props.editMode.isEditModeActive}/>)}
                {props.editMode.isEditModeActive &&
                <EditTask priorities={props.priorities} addComment={props.addComment} setPriority={props.setPriority} save={props.save} setStatus={props.setStatus}
                          statuses={props.statuses} setExecutor={props.setExecutor} users={props.users}
                          setEditMode={props.setEditMode} task={props.editMode.editableTask}/>}
            </div>
        </div>
    )
}
export default Tasks;