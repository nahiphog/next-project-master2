/* Import package components */
import React from "react";
import { Container, TextField } from "@material-ui/core";

export default function SignUpInputForm({ userSignUp, setUserSignUp}) {
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
          value={userSignUp.name}
          onChange ={e => setUserSignUp(
            {
              name: e.target.value,
              email: userSignUp.email,
              password: userSignUp.password,
            }
            )}
        />

        {/* Email */}
        <TextField
          id="outlined-full-width"
          label="Email"
          style={{ margin: 8 }}
          placeholder="Email"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
          type="email"
          value={userSignUp.email}
          onChange ={e => setUserSignUp(
            {
              name: userSignUp.name,
              email: e.target.value,
              password: userSignUp.password,
            }
            )}
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
          value={userSignUp.password}
          onChange ={e => setUserSignUp(
            {
              name: userSignUp.name,
              email: userSignUp.email,
              password: e.target.value,
            }
            )}
        />
      </Container>
    </>
  );
}
