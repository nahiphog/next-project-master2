/* Import package components */
import React from "react";

export default function Content({ message }) {
  return (
    <>
      <div>
        <h1>Content</h1>
        <p>{message}</p>
      </div>
    </>
  );
}
