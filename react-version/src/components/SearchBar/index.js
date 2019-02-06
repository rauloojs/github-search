import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ search, onSearchChange, onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="search"
        placeholder="Repo name"
        value={search}
        onChange={onSearchChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string,
  onSearchChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default SearchBar;