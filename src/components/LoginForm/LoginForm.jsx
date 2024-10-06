import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { login } from '../../redux/auth/operations';

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
      <Form>
        <label>Email</label>
        <Field type="email" name="email" required />
        <label>Password</label>
        <Field type="password" name="password" required />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
