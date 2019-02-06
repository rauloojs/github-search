import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div>
      {repo.name}
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object,
};

export default RepoItem;