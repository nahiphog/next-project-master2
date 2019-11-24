/* Import package components */
import React from "react";
import { IconButton } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";
import { route, subTitle } from "../global";

export default function SubTopNav({ routeTo, routeOption }) {
  console.log("routeOption: ", routeOption);
  return (
    <>
      <IconButton onClick={() => routeTo(route.back)}>
        <KeyboardBackspace />
        {subTitle[routeOption]}
      </IconButton>
    </>
  );
}
