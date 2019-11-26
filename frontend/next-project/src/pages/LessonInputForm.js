/* Import package components */
import React, { useState } from "react";
import { Container, TextField } from "@material-ui/core";

export default function CreateLessonPage() {
  return (
    <>
      <Container maxWidth="sm">
        <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
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
