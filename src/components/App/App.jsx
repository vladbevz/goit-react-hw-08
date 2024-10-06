import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { refreshUser } from '../../redux/auth/operations';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes className={styles.app}>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
