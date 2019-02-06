import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from '../RepoItem';

const RepoList = ({ repos, totalCount }) => {
  return (
    <div>
      <h4>{totalCount} results</h4>
      <ul className="list-group">
        {repos.map((repo) => (
          <RepoItem
            key={repo.id}
            repo={repo}
          />
        ))}
      </ul>
    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.array,
  totalCount: PropTypes.number,
};

export default RepoList;