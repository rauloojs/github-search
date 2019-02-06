const baseURL = 'https://api.github.com';

export const searchRepositories = (q = '') => {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseURL}/search/repositories?q=${q}`, options)
    .then((response) => response.json());
};
