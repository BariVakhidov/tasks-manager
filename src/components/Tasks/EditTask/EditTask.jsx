import React from "react";
import s from "./EditTask.module.css"
import close from "../../../assets/images/exit.png";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Info from "./Info";
import Comment from "./Comment";


const EditTask = ({setStatus, statuses, setExecutor, setEditMode, users, task, save,addComment}) => {
    let {tags, price, resolutionDatePlan, createdAt, priorityName, ...data} = task;
    return (
        <div className={s.editTask} >
            <div className={s.editTaskHead}>
                <div>{"№ " + task.id}</div>
                <div>{task.name}</div>
                <div className={s.close} onClick={() => setEditMode()}><img src={close} alt="close" height={18}/></div>
            </div>
            <div className={s.editTaskCont}>
                <div className={s.description}>
                    <span>Описание</span>
                    {task.description}
                    <div>
                        <Formik
                            initialValues={{comment: ""}}
                            validate={values => {
                                const errors = {};
                                if (!values.comment) {
                                    errors.comment = 'Поле не заполнено';
                                }
                                return errors;
                            }}
                            onSubmit={(values, {setSubmitting, setFieldValue, setFieldTouched}) => {
                                addComment({...data, ...values}, task.id);
                                setFieldTouched("comment", false)
                                setFieldValue("comment","");
                                setSubmitting(false);
                            }}
                        >
                            {({isSubmitting}) => (
                                <Form className={s.form}>
                                    <span>Добавление комментария</span>
                                    <div>
                                        <Field className={s.newComment} type="comment" name="comment"
                                               component={"textarea"}/>
                                        <ErrorMessage className={s.error} name="comment" component="div"/>
                                    </div>
                                    <button type="submit" disabled={isSubmitting}>
                                        Добавить комментарий
                                    </button>
                                </Form>
                            )}
                        </Formik>
                        <button onClick={()=> save(data)}>
                            Сохранить
                        </button>
                    </div>
                    {task.lifetimeItems.map(c => <Comment key={c.id} comment={c.comment} createdAt={c.createdAt} userName={c.userName}/>)}
                </div>
                <Info setStatus={setStatus} statuses={statuses} users={users} task={task} setExecutor={setExecutor}/>
            </div>
        </div>
    )
}
export default React.memo(EditTask);