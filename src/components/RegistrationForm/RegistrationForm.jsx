import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
    console.log(values)
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>Name</label>
        <Field type="text" name="name" required />
        <label>Email</label>
        <Field type="email" name="email" required />
        <label>Password</label>
        <Field type="password" name="password" required />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
