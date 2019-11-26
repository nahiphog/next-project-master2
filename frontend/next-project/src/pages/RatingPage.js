/* Import package components */
import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { route } from "../global";

/* CSS Styles */
const ContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%"
};

export default function RatingPage({ parentRouteTo }) {
  return (
    <>
      <div style={ContainerStyles}>
        <h1>Rating</h1>
        <ButtonGroup fullWidth aria-label="full width button group">
          <Button onClick={() => parentRouteTo(route.close)}>Cancel</Button>
          <Button onClick={() => parentRouteTo(route.close)}>Submit</Button>
        </ButtonGroup>
      </div>
    </>
  );
}
