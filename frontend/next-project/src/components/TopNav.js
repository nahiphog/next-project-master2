/* Import package components */
import React from "react";
import { AppBar, Toolbar, Avatar } from "@material-ui/core";

export default function TopNav() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Avatar>S</Avatar>
        </Toolbar>
      </AppBar>
    </>
  );
}
