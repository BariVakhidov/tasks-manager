import React from "react";
import s from "./NewTask.module.css";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import close from "../../../assets/images/exit.png"

const NewTask = ({createTask,deactivateNewTaskEditMode}) => {
    return (
        <div className={s.newTask}>
            <div className={s.newTaskHead}>
                <div>Новая заявка</div>
                <div className={s.close} onClick={deactivateNewTaskEditMode}><img src={close} alt="close" height={18}/></div>
            </div>
            <div>
                <Formik
                    initialValues={{description: "", name: ""}}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Поле не заполнено';
                        }
                        if (!values.description) {
                            errors.description = 'Поле не заполнено';
                        }
                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        createTask(values);
                        setSubmitting(false);
                        deactivateNewTaskEditMode();
                    }}
                >
                    {({isSubmitting}) => (
                        <Form className={s.form}>
                            <span>Название</span>
                            <div>
                                <Field className={s.title} type="name" name="name" component={"textarea"}/>
                                <ErrorMessage className={s.error} name="name" component="div"/>
                            </div>
                            <span>Описание</span>
                            <div>
                                <Field className={s.description} type="description" name="description" component={"textarea"}/>
                                <ErrorMessage className={s.error} name="description" component="div"/>
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                Сохранить
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}
export default NewTask;