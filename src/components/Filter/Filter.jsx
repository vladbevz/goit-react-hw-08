import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/contacts/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const handleFilterChange = (event) => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <div>
      <h2>Filter Contacts</h2>
      <input
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default Filter;
