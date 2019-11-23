/* Import package components */
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  SwipeableDrawer,
  Dialog,
  Slide
} from "@material-ui/core";
import { Menu, KeyboardBackspace } from "@material-ui/icons";

const SlideTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setOpen(!open)}>
            <Menu />
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <Avatar onClick={() => setDialogOpen(true)}>S</Avatar>
        </Toolbar>
        <SwipeableDrawer
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          disableSwipeToOpen={false}
          PaperProps={{ style: { minWidth: "50vw" } }}
        >
          <span>Hello</span>
        </SwipeableDrawer>
        <Dialog
          open={dialogOpen}
          fullScreen
          TransitionComponent={SlideTransition}
        >
          <IconButton onClick={() => setDialogOpen(false)}>
            <KeyboardBackspace />
          </IconButton>
        </Dialog>
      </AppBar>
    </>
  );
}
