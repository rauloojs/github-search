const baseURL = 'https://api.github.com';

export const searchRepositories = (q = '', page = 1) => {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseURL}/search/repositories?q=${q}&page=${page}&per_page=10`, options)
    .then((response) => response.json());
};
