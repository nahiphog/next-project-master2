/* Import package components */
import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { route } from "../global";

/* Import app components */
import SignUpInputForm from "../pages/SignUpInputForm";

/* CSS Styles */
const ContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%"
};

export default function SignUpPage({ parentRouteTo }) {
  const [userSignUp, setUserSignUp] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSignUp = () => {
    console.log(userSignUp)
  };
  return (
    <>
      <div style={ContainerStyles}>
        <SignUpInputForm userSignUp = {userSignUp} setUserSignUp = { setUserSignUp } />
        <ButtonGroup fullWidth aria-label="full width button group">
          <Button onClick={() => parentRouteTo(route.close)}>Cancel</Button>
          <Button onClick={handleSignUp}>Sign Up</Button>
        </ButtonGroup>
      </div>
    </>
  );
}
