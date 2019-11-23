/* Import package components */
import React, { useState } from "react";
import { Grid, CssBaseline } from "@material-ui/core";

/* Import app components */
import TopNav from "./components/TopNav";
import Content from "./components/Content";
import BotNav from "./components/BotNav";

const ContainerStyles = {
  height: "calc(100vh - 112px)",
  overflow: "auto",
  textAlign: "center"
};

export default function App() {
  const [tab, setTab] = useState(0);

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
        <TopNav />
        <div style={ContainerStyles}>{renderView()}</div>
        <BotNav value={tab} onChange={setTab} />
      </Grid>
      <CssBaseline />
    </>
  );
}
