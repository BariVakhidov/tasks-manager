import s from "./EditTask.module.css";
import calendar from "../../../assets/images/calendar.png";
import Tag from "../Tag";
import React, {useState} from "react";

const Info = ({task, users, setExecutor, statuses, setStatus}) => {
    let [editStatus, setEditStatusMode] = useState(false);
    let [editExecutor, setEditExecutorMode] = useState(false);

    return (
        <div className={s.info}>
            <div className={s.status} onClick={editExecutor ? undefined : () => setEditStatusMode(true)}>
                <div className={s.dot} style={{backgroundColor: task.statusRgb}}></div>
                <div>{task.statusName}</div>
            </div>

            {editStatus && <div className={s.statusEdit}>{statuses.map(status => <div onClick={() => {
                setStatus(status.rgb, status.name, status.id);
                setEditStatusMode(false);
            }} className={s.status} style={{margin: "30px 0 30px 20px"}} key={status.id}>
                <div className={s.dot} style={{backgroundColor: status.rgb}}></div>
                {status.name}</div>)}
            </div>}

            <div className={s.flexCont}>
                <span>Заявитель</span>
                {task.initiatorName}
            </div>

            <div className={s.flexCont}>
                <span>Создана</span>
                {task.initiatorName}
            </div>

            <div className={s.flexCont}>
                <span>Исполнитель</span>
                <div className={s.executor} onClick={editStatus ? undefined : () => {
                    setEditExecutorMode(true);
                }}>{task.executorName}</div>
            </div>
            {editExecutor && <div className={s.executorEdit}>{users.map(user => <div onClick={() => {
                setEditExecutorMode(false);
                setExecutor(user.name, user.id)
            }} className={s.executor} key={user.id}>{user.name}</div>)}</div>}

            <div className={s.flexCont}>
                <span>Приоритет</span>
               <div className={s.executor}>
                   {task.priorityName}
               </div>
            </div>
            <div className={s.flexCont}>
                <span><img src={calendar} alt="calendar" height={15}/> Срок</span>
                {new Date(Date.parse(task.resolutionDatePlan)).toLocaleDateString()}
            </div>
            <div className={s.flexCont}>
                <span>Теги</span>
                <div className={s.tags}>{task.tags.map(t => <Tag key={t.id} name={t.name}/>)}</div>
            </div>
        </div>
    )
}
export default Info;