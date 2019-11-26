/* Import package components */
import React, { useState } from "react";
import { Container, Button, ButtonGroup } from "@material-ui/core";
import { route } from "../global";

/* Import app components */
import DialogPage from "../components/DialogPage";
import LessonInputForm from "../pages/LessonInputForm";

/* CSS Styles */
const ContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%"
};

export default function CreateLessonPage({ parentRouteTo, teach }) {
  const [routeOption, setRouteOption] = useState(route.close);
  const [dialogOpen, setDialogOpen] = useState(false);
  const routeTo = option => {
    if (option === route.close) {
      setDialogOpen(false);
    } else {
      setDialogOpen(true);
    }
    setRouteOption(option);
  };
  return (
    <>
      <div style={ContainerStyles}>
        <LessonInputForm />
        <ButtonGroup fullWidth aria-label="full width button group">
          <Button onClick={() => parentRouteTo(route.close)}>Cancel</Button>
          <Button onClick={() => routeTo(route.todo)}>Create</Button>
        </ButtonGroup>
      </div>
      <DialogPage
        routeTo={routeTo}
        routeOption={routeOption}
        dialogOpen={dialogOpen}
      />
    </>
  );
}
