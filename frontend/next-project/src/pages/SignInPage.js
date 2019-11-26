/* Import package components */
import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { route } from "../global";

/* Import app components */
import SignInInputForm from "../pages/SignInInputForm";

/* CSS Styles */
const ContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%"
};


export default function SignInPage({ parentRouteTo }) {
  const [userSignIn, setUserSignIn] = useState({
    name: '',
    password: '',
  });

  const handleSignIn = () => {
    console.log(userSignIn)
  };
  return (
    <>
      <div style={ContainerStyles}>
        <SignInInputForm userSignIn = {userSignIn} setUserSignIn={setUserSignIn} />
        <ButtonGroup fullWidth aria-label="full width button group">
          <Button onClick={() => parentRouteTo(route.close)}>Cancel</Button>
          <Button onClick={handleSignIn}>Sign In</Button>
        </ButtonGroup>
      </div>
    </>
  );
}
