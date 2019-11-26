/* Import package components */
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  SwipeableDrawer,
  Grid,
  List, ListSubheader, ListItem, ListItemIcon, ListItemText
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import FaceIcon from '@material-ui/icons/Face';
import PersonIcon from '@material-ui/icons/Person';
import TelegramIcon from '@material-ui/icons/Telegram';
import InboxIcon from '@material-ui/icons/Inbox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import { route } from "../global";

/* Import app components */
import DialogPage from "../components/DialogPage";

const iconColor ={
  color: '#5CB3FF'
}

const backGround ={
  color: '#C2DFFF'
}

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
          {/* <h4>Menu</h4> */}
          <br /><br /><br />
          <Grid container direction="column">
          <List component="nav" aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader" style={backGround} >
                <ListItem button>
                  <ListItemIcon>
                    <AccountCircleIcon style={{ fontSize: 50, color: "#1589FF"}}/>
                  </ListItemIcon>
              </ListItem>
              </ListSubheader>
          }>
            <br />
              <ListItem button onClick={() => routeTo(route.profilePage)}>
                <ListItemIcon>
                  <PersonIcon style={iconColor} />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItem>
              <ListItem button onClick={() => routeTo(route.learnListPage)}>
                <ListItemIcon>
                  <ImportContactsIcon style={iconColor}/>
                </ListItemIcon>
                <ListItemText primary="Lesson List" />
              </ListItem>
              <ListItem button onClick={() => routeTo(route.teachListPage)}>
                <ListItemIcon>
                  <FaceIcon style={iconColor}/>
                </ListItemIcon>
                <ListItemText primary="Teach List" />
              </ListItem>
              <ListItem button onClick={() => routeTo(route.bookmarkListPage)}>
                <ListItemIcon>
                  <BookmarkIcon style={iconColor}/>
                </ListItemIcon>
                <ListItemText primary="Bookmark List" />
              </ListItem>
              <ListItem button onClick={() => routeTo(route.inboxListPage)}>
                <ListItemIcon>
                  <InboxIcon style={iconColor}/>
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button onClick={() => routeTo(route.signinPage)}>
                <ListItemIcon>
                  <ExitToAppIcon style={iconColor}/>
                </ListItemIcon>
                <ListItemText primary="Signup/Login" />
              </ListItem>
            </List>
          </Grid>
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
