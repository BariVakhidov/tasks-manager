import {instance} from "./axios-instance";

const tenant = '7b97a3bb-f88b-4d64-a31c-eddade343b06';

export const tasksAPI = {
    getTasks() {
        return (instance.get(`odata/tasks?tenantguid={${tenant}}`).then(response => response.data))
    },
    getTask(id) {
        return (instance.get(`/api/{${tenant}}/Tasks/${id}`).then(response => response.data))
    },
    getUsers() {
        return (instance.get(`api/{${tenant}}/Users`).then(response => response.data))
    },
    getStatuses() {
        return (instance.get(`api/{${tenant}}/Statuses`).then(response => response.data))
    },
    getPriorities() {
        return (instance.get(`api/{${tenant}}/Priorities`).then(response => response.data))
    },
    createTask(taskData) {
        return(instance.post(`api/{${tenant}}/Tasks`, taskData).then(response => response.data))
    },
    saveTaskEdit(payload) {
        return(instance.put(`api/{${tenant}}/Tasks`, payload).then(response => response.data))
    }
}