/* Import package components */
import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, People, Settings } from "@material-ui/icons";

export default function BotNav({ value, onChange }) {
  return (
    <>
      <BottomNavigation value={value} onChange={(e, tab) => onChange(tab)}>
        <BottomNavigationAction icon={<Home />} />
        <BottomNavigationAction icon={<People />} />
        <BottomNavigationAction icon={<Settings />} />
      </BottomNavigation>
    </>
  );
}
