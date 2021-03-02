import React, {useState, useEffect} from "react";
import s from "./Tasks.module.css"
import Task from "./Task";
import NewTask from "./NewTask/NewTask";
import EditTask from "./EditTask/EditTask";

const Tasks = (props) => {
    let [newTaskEditMode, setNewTaskEditMode] = useState(false);

    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            // Add event listener
            window.addEventListener("resize", handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount

        return windowSize;
    }

    const activateNewTaskEditMode = () => {
        props.setNewTaskMode();
        setNewTaskEditMode(true);
    }
    const deactivateNewTaskEditMode = () => {
        setNewTaskEditMode(false);
        props.setNewTaskMode();
    }
    const size = useWindowSize();
    let w = "100%";
    if (props.newTaskMode) {
        w = size.width - 600;
    }
    if (props.editMode.isEditModeActive) {
        w = size.width - 1050;
    }
    return (
        <div className={s.tasks}>
            <button onClick={props.editMode.isEditModeActive === false ? activateNewTaskEditMode : undefined}
                    disabled={newTaskEditMode}>Создать заявку
            </button>
            <div className={s.taskHead}>
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
            {props.editMode.isEditModeActive &&
            <EditTask priorities={props.priorities} addComment={props.addComment} setPriority={props.setPriority}
                      save={props.save} setStatus={props.setStatus}
                      statuses={props.statuses} setExecutor={props.setExecutor} users={props.users}
                      setEditMode={props.setEditMode} task={props.editMode.editableTask}/>}
            <div className={s.tasksCont} style={{width: w}}>
                {props.tasks.map(t => <Task requestTask={props.requestTask} key={t.id}
                                            newTaskMode={props.newTaskMode}
                                            task={t} editMode={props.editMode.isEditModeActive}/>)}
            </div>
            {newTaskEditMode &&
            <NewTask createTask={props.createTask} deactivateNewTaskEditMode={deactivateNewTaskEditMode}/>}
        </div>
    )
}
export default Tasks;