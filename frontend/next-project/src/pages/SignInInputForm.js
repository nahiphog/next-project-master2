/* Import package components */
import React from "react";
import { Container, TextField } from "@material-ui/core";

export default function SignInInputForm({ userSignIn, setUserSignIn }) {
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
          type="name"
          value={userSignIn.name}
          onChange={e =>
            setUserSignIn({
              name: e.target.value,
              password: userSignIn.password
            })
          }
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
          type="password"
          value={userSignIn.password}
          onChange={e =>
            setUserSignIn({
              name: userSignIn.name,
              password: e.target.value
            })
          }
        />
      </Container>
    </>
  );
}
