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

export default function TopNav({ routeTo }) {
  const [open, setOpen] = useState(false);

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
          <span onClick={() => routeTo(route.learnList)}>Hello</span>
        </SwipeableDrawer>
      </AppBar>
    </>
  );
}
