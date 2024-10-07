import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label className={styles.label}>Email</label>
        <Field className={styles.input} type="email" name="email" required />
        <label className={styles.label}>Password</label>
        <Field className={styles.input} type="password" name="password" required />
        <button type="submit" className={styles.submitButton}>Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

