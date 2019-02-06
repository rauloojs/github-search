import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={repo.html_url}
      className="list-group-item list-group-item-action"
    >
      {repo.full_name}
    </a>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object,
};

export default RepoItem;