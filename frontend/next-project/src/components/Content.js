/* Import package components */
import React, { useState } from "react";
import { Grid, Button, ButtonGroup } from "@material-ui/core";
import { route } from "../global";

/* Import app components */
import DialogPage from "../components/DialogPage";

export default function Content() {
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
      <h1>Content</h1>
      <Grid item>
        <ButtonGroup
          color="secondary"
          size="large"
          aria-label="large outlined secondary button group"
        >
          <Button onClick={() => routeTo(route.lessonPage)}>Lesson</Button>
          <Button onClick={() => routeTo(route.eventListPage)}>Event</Button>
          <Button onClick={() => routeTo(route.teachListPage)}>Teach</Button>
        </ButtonGroup>
      </Grid>
      <DialogPage
        routeTo={routeTo}
        routeOption={routeOption}
        dialogOpen={dialogOpen}
      />
    </>
  );
}
