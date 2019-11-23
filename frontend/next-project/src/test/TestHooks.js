/* Import package components */
import React, { useState } from "react";

function TestHooks() {
  const [currentUser, setcurrentUser] = useState({
    username: "logout",
    userid: "-1",
    loggedIn: false
  });

  return (
    <>
      <h4>username: {currentUser.username}</h4>
      <h4>userid: {currentUser.userid}</h4>
      <h4>loggedin: {currentUser.loggedIn ? "True" : "False"}</h4>
      <button
        onClick={() => {
          setcurrentUser({
            username: "login",
            userid: "0",
            loggedIn: true
          });
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          setcurrentUser({
            username: "logout",
            userid: "-1",
            loggedIn: false
          });
        }}
      >
        logout
      </button>
    </>
  );
}

export default TestHooks;
