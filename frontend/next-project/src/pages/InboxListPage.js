/* Import package components */
import React, { useState } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import { route } from "../global";

/* Import app components */
import DialogPage from "../components/DialogPage";

export default function InboxListPage() {
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
      <ButtonGroup
        color="secondary"
        size="large"
        aria-label="large outlined secondary button group"
      >
        <Button onClick={() => routeTo(route.inboxListPage)}>Inbox</Button>
        <Button onClick={() => routeTo(route.eventListPage)}>Event</Button>
        <Button onClick={() => routeTo(route.teachListPage)}>Teach</Button>
      </ButtonGroup>
      <DialogPage
        routeTo={routeTo}
        routeOption={routeOption}
        dialogOpen={dialogOpen}
      />
    </>
  );
}
