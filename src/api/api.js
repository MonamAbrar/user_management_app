

export const list_API = () => {
  return fetch('https://jsonplaceholder.typicode.com/users');
};
  
export const read_API = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

};

export const create_API = (newEntry) => {
  return fetch(
    'https://jsonplaceholder.typicode.com/users',
    {
      method: 'POST',
      body: JSON.stringify(newEntry),
      headers: {'Content-type': 'application/json; charset=UTF-8'}
    }
  );
};

export const update_API = (id, updatedEntry) => {
  return fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify(updatedEntry),
      headers: {'Content-type': 'application/json; charset=UTF-8'},
    }
  );
};



export const delete_API = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {method: 'DELETE'});
};


