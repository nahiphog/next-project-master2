/* Import package components */
import React from "react";
import { IconButton } from "@material-ui/core";
import { KeyboardBackspace } from "@material-ui/icons";
import { route, subTitle } from "../global";

const navBackgroundColor = {
  backgroundColor: '#1589FF',
  textAlign: 'center'
}

export default function SubTopNav({ routeTo, routeOption }) {
  return (
    <div style={navBackgroundColor}>
      <IconButton onClick={() => routeTo(route.close)} style={{color: 'white'}}>
        <KeyboardBackspace />
        <strong>{subTitle[routeOption]}</strong>
      </IconButton>
    </div>
  );
}
