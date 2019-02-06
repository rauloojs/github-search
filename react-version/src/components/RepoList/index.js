import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from '../RepoItem';

const RepoList = ({ repos }) => {
  return (
    repos.map((repo) => (
      <RepoItem
        key={repo.id}
        repo={repo}
      />
    ))
  );
};

RepoList.propTypes = {
  repos: PropTypes.array,
};

export default RepoList;