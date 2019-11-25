/* Import package components */
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  SwipeableDrawer
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { route } from "../global";

/* Import app components */
import DialogPage from "../components/DialogPage";

export default function TopNav() {
  const [open, setOpen] = useState(false);
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
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setOpen(!open)}>
            <Menu />
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <Avatar onClick={() => routeTo(route.profilePage)}>S</Avatar>
        </Toolbar>
        <SwipeableDrawer
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          disableSwipeToOpen={false}
          PaperProps={{ style: { minWidth: "50vw" } }}
        >
          <span onClick={() => routeTo(route.learnListPage)}>
            Link to Learn List Page
          </span>
          <span onClick={() => routeTo(route.teachListPage)}>
            Link to Teach List Page
          </span>

          <span onClick={() => routeTo(route.bookmarkListPage)}>
            Link to Bookmarks Page
          </span>
        </SwipeableDrawer>
      </AppBar>
      <DialogPage
        routeTo={routeTo}
        routeOption={routeOption}
        dialogOpen={dialogOpen}
      />
    </>
  );
}
