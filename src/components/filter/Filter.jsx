import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchTerm } from 'redux/contacts/slice';

function Filter() {
  const dispatch = useDispatch();

  const handleSearchChange = event => {
    dispatch(updateSearchTerm(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search"
      onChange={handleSearchChange}
    />
  );
}

export default Filter;
