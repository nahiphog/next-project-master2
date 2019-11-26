/* Import package components */
import React from "react";
import { Container, TextField } from "@material-ui/core";

export default function CreateLessonPage() {
  return (
    <>
      <Container maxWidth="sm">
        {/* Title */}
        <TextField
          id="outlined-full-width"
          label="Title"
          style={{ margin: 8 }}
          placeholder="Title"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />

        {/* Description */}
        <TextField
          id="outlined-full-width"
          label="Description"
          style={{ margin: 8 }}
          placeholder="Description"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
          variant="outlined"
        />

        {/* Skills */}
        <TextField
          id="outlined-full-width"
          label="Skills"
          style={{ margin: 8 }}
          placeholder="Skills"
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
