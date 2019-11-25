/* Import package components */
import React, { useState } from "react";
import { Grid, CssBaseline } from "@material-ui/core";
import { Dialog, Slide } from "@material-ui/core";
import route from "./global";

/* Import app components */
import TopNav from "./components/TopNav";
import Content from "./components/Content";
import BotNav from "./components/BotNav";
import SubTopNav from "./components/SubTopNav";
import SubContent from "./components/SubContent";

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
  const [routeOption, setRouteOption] = useState(-1);

  const routeTo = option => {
    console.log("option: ", option);
    if (option === route.back) {
      setDialogOpen(false);
    } else {
      setDialogOpen(true);
      setRouteOption(option);
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
        <TopNav routeTo={routeTo} />
        <div style={ContainerStyles}>{renderView()}</div>
        <BotNav value={tab} onChange={setTab} />
      </Grid>
      <Dialog
        open={dialogOpen}
        fullScreen
        TransitionComponent={SlideTransition}
      >
        <SubTopNav routeTo={routeTo} routeOption={routeOption} />
        <SubContent routeTo={routeTo} routeOption={routeOption} />
      </Dialog>
      <CssBaseline />
    </>
  );
}
