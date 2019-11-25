/* Import package components */
import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
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
        <Button
          variant="outlined"
          color="primary"
          onClick={() => routeTo(route.inboxListPage)}
        >
          InboxList
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => routeTo(route.eventListPage)}
        >
          EventList
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => routeTo(route.teachListPage)}
        >
          TeachList
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => routeTo(route.learnListPage)}
        >
          LearnList
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => routeTo(route.bookmarkListPage)}
        >
          BookmarkList
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => routeTo(route.signinPage)}
        >
          SignIn
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => routeTo(route.signupPage)}
        >
          SignUp
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => routeTo(route.profilePage)}
        >
          Profile
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => routeTo(route.lessonPage)}
        >
          Lesson
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => routeTo(route.createLearnPage)}
        >
          CreateLearn
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => routeTo(route.createTeachPage)}
        >
          CreateTeach
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => routeTo(route.createEventPage)}
        >
          CreateEvent
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => routeTo(route.ratingPage)}
        >
          Rating
        </Button>
      </Grid>
      <DialogPage
        routeTo={routeTo}
        routeOption={routeOption}
        dialogOpen={dialogOpen}
      />
    </>
  );
}
