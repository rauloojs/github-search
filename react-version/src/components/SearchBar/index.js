import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ search, onSearchChange, onSubmit}) => {
  return (
    <form
      className="row mb-5"
      onSubmit={onSubmit}
    >
      <div className="col-10">
        <input
          required
          className="form-control"
          name="search"
          placeholder="Repo name"
          value={search}
          onChange={onSearchChange}
        />
      </div>
      <div className="col-2">
        <button className="btn btn-primary btn-block" type="submit">Search</button>
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string,
  onSearchChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default SearchBar;