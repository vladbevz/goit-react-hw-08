import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav  className={styles.nav}>
      <NavLink className={styles.link} activeclasscame={styles.active} to="/">Home</NavLink>
      <NavLink className={styles.link} activeclasscame={styles.active} to="/contacts">Contacts</NavLink>
    </nav>
  );
};

export default Navigation;
