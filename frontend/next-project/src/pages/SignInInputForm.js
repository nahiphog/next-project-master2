/* Import package components */
import React, { useState } from "react";
import { Container, TextField } from "@material-ui/core";

export default function SignInInputForm() {
  return (
    <>
      <Container maxWidth="sm">
        {/* Username */}
        <TextField
          id="outlined-full-width"
          label="Username"
          style={{ margin: 8 }}
          placeholder="Username"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />

        {/* Password */}
        <TextField
          id="outlined-full-width"
          label="Password"
          style={{ margin: 8 }}
          placeholder="Password"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />
      </Container>
    </>
  );
}
