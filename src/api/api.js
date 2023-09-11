

export const fetchList = () => {
      return fetch('https://jsonplaceholder.typicode.com/users');

      // const data = response.json();
      // return data;
      // setUsers(data);
    
      // console.error('Error fetching user data:', error);
    // try {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //   const data = await response.json();
    //   return data;
    //   // setUsers(data);
    // } catch (error) {
    //   console.error('Error fetching user data:', error);
    //   return error;
    // }
  };

export const fetchItem = (userID) => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
  };