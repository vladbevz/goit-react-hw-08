import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/slice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <div className={styles.filterContainer}> 
      <input
        type="text"
        placeholder="Search contacts..."
        onChange={handleFilterChange}
        className={styles.filterInput}
      />
    </div>
  );
};

export default Filter;
