import React from "react";
import {connect} from "react-redux";
import Tasks from "./Tasks";
import {
    addComment,
    createTask,
    initializeTasks, requestTask, save,
    setEditableTask,
    setEditMode,
    setExecutor, setNewTaskMode, setStatus
} from "../../redux/tasks-reducer";
import Preloader from "../Preloader/Preloader";

class TasksContainer extends React.Component {

    componentDidMount() {
        this.props.initializeTasks();
    }

    render() {
        if (this.props.tasks.length === 0 || this.props.users.length===0 || this.props.priorities.length===0 || this.props.statuses.length===0) {
            return <Preloader/>
        }
        return <Tasks {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks,
        editMode: state.tasks.editMode,
        users: state.tasks.users,
        statuses: state.tasks.statuses,
        priorities: state.tasks.priorities,
        newTaskMode: state.tasks.newTaskMode
    }
}

export default connect(mapStateToProps, {
    addComment,
    requestTask,
    save,
    createTask,
    initializeTasks,
    setStatus,
    setEditMode,
    setNewTaskMode,
    setEditableTask,
    setExecutor
})(TasksContainer);