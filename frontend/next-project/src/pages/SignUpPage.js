/* Import package components */
import React, { useState } from "react";
import axios from "axios";
import { Button, ButtonGroup } from "@material-ui/core";
import { route } from "../global";
import useStores from "../hooks/useStores";
import { observer } from "mobx-react";

/* Import app components */
import SignUpInputForm from "../pages/SignUpInputForm";

/* CSS Styles */
const ContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%"
};

function SignUpPage({ parentRouteTo }) {
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    email: "",
    password: ""
  });

  const {
    userStore: { login }
  } = useStores();

  const handleSignUp = () => {
    // console.log(userSignUp);
    axios
      .post(`http://127.0.0.1:5000/api/v1/users/signup`, {
        name: userSignUp.name,
        email: userSignUp.email,
        password: userSignUp.password
      })
      .then(result => {
        const id = result.data.data.id;
        const name = result.data.data.name;
        const profile_picture = result.data.data.profile_picture;
        const access_token = result.data.data.access_token;
        console.log(result);
        console.log("sign up successfully");
        localStorage.setItem("userToken", access_token);
        localStorage.setItem("userData", JSON.stringify(name));
        login(name, id, profile_picture);
        parentRouteTo(route.close);
      })
      .catch(error => {
        console.log("ERROR: ", error);
        parentRouteTo(route.close);
      });
  };
  return (
    <>
      <div style={ContainerStyles}>
        <SignUpInputForm
          userSignUp={userSignUp}
          setUserSignUp={setUserSignUp}
        />
        <ButtonGroup fullWidth aria-label="full width button group">
          <Button onClick={() => parentRouteTo(route.close)}>Cancel</Button>
          <Button onClick={handleSignUp}>Sign Up</Button>
        </ButtonGroup>
      </div>
    </>
  );
}

export default observer(SignUpPage);
