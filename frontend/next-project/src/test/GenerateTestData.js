import axios from "axios";

export const generateData = () => {
  signInUser("1", "123");
  // getAllUsers();
  // getUser(8);
  // updateUser(8);
  // signUpUser();
};

/* Session */

export const signInUser = (username, userpassword) => {
  axios
    .post(`http://127.0.0.1:5000/api/v1/sessions/signin`, {
      name: username,
      password: userpassword
    })
    .then(result => {
      const access_token = result.data.data.access_token;
      console.log(access_token);
    })
    .catch(error => {
      console.log("ERROR: ", error);
    });
};

/* User */

export const getAllUsers = () => {
  axios
    .get(`http://127.0.0.1:5000/api/v1/users/`)
    .then(result => {
      const users = result.data;
      console.log(users);
    })
    .catch(error => {
      console.log("ERROR: ", error);
    });
};

export const getUser = id => {
  axios
    .get(`http://127.0.0.1:5000/api/v1/users/${id}`)
    .then(result => {
      const user = result.data;
      console.log(result);
    })
    .catch(error => {
      console.log("ERROR: ", error);
    });
};

export const updateUser = id => {
  axios
    .post(`http://127.0.0.1:5000/api/v1/users/${id}`, {
      name: "1",
      email: "123@email.com",
      password: "123"
    })
    .then(result => {
      console.log(result.data.data);
    })
    .catch(error => {
      console.log("ERROR: ", error);
    });
};

export const signUpUser = () => {
  axios
    .post(`http://127.0.0.1:5000/api/v1/users/signup`, {
      name: "5",
      email: "5@email.com",
      password: "123"
    })
    .then(result => {
      console.log(result.data.data);
    })
    .catch(error => {
      console.log("ERROR: ", error);
    });
};
