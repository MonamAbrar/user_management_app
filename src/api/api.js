
// 'https://jsonplaceholder.typicode.com/users'

// const domain = 'https://jsonplaceholder.typicode.com';
// const feature = 'users';

export const getRestfulAPI = (domain, feature) => ({

    list: () => fetch(`${domain}/${feature}`).then(response => response.json()),
    
    create: (newEntry) => fetch(
        `${domain}/${feature}`,
        {
          method: 'POST',
          body: JSON.stringify(newEntry),
          headers: {'Content-type': 'application/json; charset=UTF-8'}
        }
      ).then(response => response.json()),
    
    read: (id) => fetch(`${domain}/${feature}/${id}`).then(response => response.json()),
    
    update: (id, updatedEntry) => fetch(
        `${domain}/${feature}/${id}`,
        {
          method: 'PUT',
          body: JSON.stringify(updatedEntry),
          headers: {'Content-type': 'application/json; charset=UTF-8'},
        }
      ).then(response => response.json()),
    
    delete: (id) => fetch(`${domain}/${feature}/${id}`, {method: 'DELETE'}).then(response => response.json()),
})

export const usersAPI = getRestfulAPI('https://jsonplaceholder.typicode.com', 'users');




// export const list_API = () => {
//   return fetch('https://jsonplaceholder.typicode.com/users');
// };
  
// export const read_API = (id) => {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
// };

// export const create_API = (newEntry) => {
//   return fetch(
//     'https://jsonplaceholder.typicode.com/users',
//     {
//       method: 'POST',
//       body: JSON.stringify(newEntry),
//       headers: {'Content-type': 'application/json; charset=UTF-8'}
//     }
//   );
// };

// export const update_API = (id, updatedEntry) => {
//   return fetch(
//     `https://jsonplaceholder.typicode.com/users/${id}`,
//     {
//       method: 'PUT',
//       body: JSON.stringify(updatedEntry),
//       headers: {'Content-type': 'application/json; charset=UTF-8'},
//     }
//   );
// };

// export const delete_API = (id) => {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {method: 'DELETE'});
// };




