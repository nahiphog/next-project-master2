/* Import package components */
import React, { useState } from "react";
import { Container, Button, ButtonGroup } from "@material-ui/core";
import { route } from "../global";

/* Import app components */
import DialogPage from "../components/DialogPage";
import LessonInfoPage from "../pages/LessonInfoPage";

/* CSS Styles */
const ContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

export default function LessonPage() {
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
      <Container maxWidth="sm" style={ContainerStyles}>
        <LessonInfoPage />
        <ButtonGroup fullWidth aria-label="full width button group">
          <Button onClick={() => routeTo(route.todo)}>Bookmark</Button>
          <Button onClick={() => routeTo(route.todo)}>Chat</Button>
          <Button onClick={() => routeTo(route.createEventPage)}>
            Request
          </Button>
        </ButtonGroup>
      </Container>
      <DialogPage
        routeTo={routeTo}
        routeOption={routeOption}
        dialogOpen={dialogOpen}
      />
    </>
  );
}
