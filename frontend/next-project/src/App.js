/* Import package components */
import React from "react";
import { Grid, CssBaseline } from "@material-ui/core";
<<<<<<< HEAD
import { Dialog, Slide } from "@material-ui/core";
import route from "./global";
=======
>>>>>>> ccc96023b398acf366590f8f892636c54f224809

/* Import app components */
import TopNav from "./components/TopNav";
import Content from "./components/Content";

/* CSS Styles */
const ContainerStyles = {
  height: "calc(100vh - 56px)",
  width: "100vw",
  overflow: "auto",
  textAlign: "center"
};

export default function App() {
<<<<<<< HEAD
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

=======
>>>>>>> ccc96023b398acf366590f8f892636c54f224809
  return (
    <>
      <Grid container direction="column">
        <TopNav />
        <div style={ContainerStyles}>
          <Content />
        </div>
      </Grid>
      <CssBaseline />
    </>
  );
}
