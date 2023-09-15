

export const list_API = () => {
      return fetch('https://jsonplaceholder.typicode.com/users');
  };

export const read_API = (userID) => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
  };