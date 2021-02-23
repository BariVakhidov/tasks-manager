import {tasksAPI} from "../api/api";

const SET_TASKS = "test-app/tasks/SET_TASKS";
const SET_STATUSES = "test-app/tasks/SET_STATUSES";
const SET_USERS = "test-app/tasks/SET_USERS";
const SET_PRIORITIES = "test-app/tasks/SET_PRIORITIES";
const SET_EXECUTOR = "test-app/tasks/SET_EXECUTOR";
const SET_STATUS = "test-app/tasks/SET_STATUS";
const SET_EDIT_MODE = "test-app/tasks/SET_EDIT_MODE";
const SET_EDITABLE_TASK = "test-app/tasks/SET_EDITABLE_TASK";

export const setTasks = (tasks) => ({type: SET_TASKS, tasks});
export const setStatuses = (statuses) => ({type: SET_STATUSES, statuses});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setPriorities = (priorities) => ({type: SET_PRIORITIES, priorities});
export const setExecutor = (executorName, executorId) => ({type: SET_EXECUTOR, executorName, executorId});
export const setStatus = (rgb, name, statusId) => ({type: SET_STATUS, rgb, name, statusId});
export const setEditMode = () => ({type: SET_EDIT_MODE});
export const setEditableTask = (task) => ({type: SET_EDITABLE_TASK, task});

let initialState = {
    tasks: [],
    editMode: {
        isEditModeActive: false,
        editableTask: null,
    },
    users: [],
    statuses: [],
    priorities: []
}
const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.tasks
            }
        case SET_EDIT_MODE:
            return {
                ...state,
                editMode: {...state.editMode, isEditModeActive: !state.editMode.isEditModeActive}
            }
        case SET_EDITABLE_TASK:
            return {
                ...state,
                editMode: {
                    ...state.editMode,
                    editableTask: action.task
                }
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_PRIORITIES:
            return {
                ...state,
                priorities: action.priorities
            }
        case SET_EXECUTOR:
            return {
                ...state,
                editMode: {
                    ...state.editMode,
                    editableTask: {
                        ...state.editMode.editableTask,
                        executorName: action.executorName,
                        executorId: action.executorId
                    }
                }
            }
        case SET_STATUSES:
            return {
                ...state,
                statuses: action.statuses
            }
        case SET_STATUS:
            return {
                ...state,
                editMode: {
                    ...state.editMode,
                    editableTask: {
                        ...state.editMode.editableTask,
                        statusId: action.statusId,
                        statusName: action.name,
                        statusRgb: action.rgb
                    }
                }
            }
        default:
            return state;
    }
}
export default tasksReducer;

export const initializeTasks = () => async dispatch => {
    await dispatch(requestTasks());
    let statusesData = await tasksAPI.getStatuses();
    dispatch(setStatuses(statusesData));
    await dispatch(requestUsers());
    let priorities = await tasksAPI.getPriorities();
    dispatch(setPriorities(priorities));
}

export const requestTasks = () => async dispatch => {
    let data = await tasksAPI.getTasks();
    dispatch(setTasks(data.value));
};
export const requestTask = (id) => async dispatch => {
    let data = await tasksAPI.getTask(id);
    dispatch(setEditableTask(data));
    dispatch(setEditMode());
};
export const requestUsers = () => async dispatch => {
    let data = await tasksAPI.getUsers();
    dispatch(setUsers(data));
};

export const createTask = (taskData) => async dispatch => {
    let data = await tasksAPI.createTask(taskData);
    await dispatch(requestTasks());
    let data2 = await tasksAPI.getTask(data);
    dispatch(setEditableTask(data2));
};
export const save = (payload) => async dispatch => {
    await tasksAPI.saveTaskEdit(payload);
    await dispatch(requestTasks());
    dispatch(setEditMode());
};
export const addComment = (payload, id) => async dispatch => {
    await tasksAPI.saveTaskEdit(payload);
    let data2 = await tasksAPI.getTask(id);
    dispatch(setEditableTask(data2));
}