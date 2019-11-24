/* Import package components */
import React, { useState } from "react";
import { Grid, CssBaseline } from "@material-ui/core";
import { IconButton, Dialog, Slide } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";
import { route } from "./global";

/* Import app components */
import TopNav from "./components/TopNav";
import Content from "./components/Content";
import BotNav from "./components/BotNav";

const ContainerStyles = {
  height: "calc(100vh - 112px)",
  overflow: "auto",
  textAlign: "center"
};

const SlideTransition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function App() {
  const [tab, setTab] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const RouteTo = option => {
    console.log("option: ", option);
    if (option === route.back) {
      setDialogOpen(false);
    } else {
      setDialogOpen(true);
    }
  };

  function renderView() {
    switch (tab) {
      case 0:
        return <Content message={"Tab 0"} />;
      case 1:
        return <Content message={"Tab 1"} />;
      case 2:
        return <Content message={"Tab 2"} />;
      default:
        return new Error("This view does not exist");
    }
  }

  return (
    <>
      <Grid container direction="column">
        <TopNav RouteTo={RouteTo} />
        <div style={ContainerStyles}>{renderView()}</div>
        <BotNav value={tab} onChange={setTab} />
      </Grid>
      <Dialog
        open={dialogOpen}
        fullScreen
        TransitionComponent={SlideTransition}
      >
        <IconButton onClick={() => RouteTo(route.back)}>
          <KeyboardBackspace />
        </IconButton>
      </Dialog>
      <CssBaseline />
    </>
  );
}
