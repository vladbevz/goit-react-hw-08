import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.css'

const RegistrationPage = () => (
  <div>
    <div className={styles.container}>
    <h1 className={styles.title}>Register</h1>
    </div>
    
    <RegistrationForm />
  </div>
);

export default RegistrationPage;
