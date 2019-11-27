import axios from "axios";

/* Functions */

export const generateData = () => {
  editprofile();
  // getAllUsers();
  // getUser(8);
  // signUpUser();
};

export const signin = () => {
  const name = "111";
  const password = "123";
  signInUser(name, password);
};

export const signout = () => {
  localStorage.removeItem("userToken");
  localStorage.removeItem("userData");
};

export const editprofile = () => {
  const id = "8";
  const name = "1";
  const email = "1@email.com";
  const password = "123";
  updateUser(id, name, email, password);
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
      localStorage.setItem("userToken", access_token);
      localStorage.setItem("userData", JSON.stringify(username));
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

export const updateUser = (id, username, useremail, userpassword) => {
  const token = localStorage.getItem("userToken");
  const config = {
    headers: {
      Authorization: "Bearer " + token
    }
  };

  axios
    .post(
      `http://127.0.0.1:5000/api/v1/users/${id}`,
      {
        name: username,
        email: useremail,
        password: userpassword
      },
      config
    )
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
