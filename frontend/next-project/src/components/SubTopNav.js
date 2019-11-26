/* Import package components */
import React from "react";
import { IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { route, subTitle } from "../global";
import Toolbar from "@material-ui/core/Toolbar";

const navBackgroundColor = {
  backgroundColor: "#1589FF",
  textAlign: "center"
};

export default function SubTopNav({ routeTo, routeOption }) {
  return (
    <div style={navBackgroundColor}>
      <Toolbar style={{ display: "flex" }}>
        <div style={{ justifyContent:"center" }}>
        <IconButton
          edge="start"
          onClick={() => routeTo(route.close)}
          style={{ color: "white" }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        </div>
        <div style={{ width: "100vw", justifyContent:"center" }} >
        <IconButton
          onClick={() => routeTo(route.close)}
          style={{ color: "white"}}
        >
        <strong>{subTitle[routeOption]}</strong>
        </IconButton>
        </div>
        <div style={{ justifyContent:"center" }}>
        <IconButton
          edge="end"
          onClick={() => routeTo(route.close)}
          style={{ color: "#1589FF" }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        </div>
      </Toolbar>
    </div>
  );
}
