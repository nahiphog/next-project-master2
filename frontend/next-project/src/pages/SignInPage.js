/* Import package components */
import React from "react";
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
  return (
    <>
      <div style={ContainerStyles}>
        <SignInInputForm />
        <ButtonGroup fullWidth aria-label="full width button group">
          <Button onClick={() => parentRouteTo(route.close)}>Cancel</Button>
          <Button onClick={() => parentRouteTo(route.close)}>Sign In</Button>
        </ButtonGroup>
      </div>
    </>
  );
}
