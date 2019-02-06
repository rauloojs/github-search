import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from '../RepoItem';

const RepoList = ({ repos, totalCount, onLoadMore }) => {
  return (
    <div>
      <h4>{totalCount} results</h4>
      <ul className="list-group mb-4">
        {repos.map((repo) => (
          <RepoItem
            key={repo.id}
            repo={repo}
          />
        ))}
      </ul>
      <button type="button" className="btn btn-outline-secondary float-right" onClick={onLoadMore}>Load more</button>
    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array,
  totalCount: PropTypes.number,
  onLoadMore: PropTypes.func,
};

export default RepoList;