/* Import package components */
import React, { useState } from "react";

/* CSS Styles */
const ContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%"
};

export default function EventListPage({ parentRouteTo }) {
  return (
    <>
      <div style={ContainerStyles}>
        <h1>EventList</h1>
      </div>
    </>
  );
}
