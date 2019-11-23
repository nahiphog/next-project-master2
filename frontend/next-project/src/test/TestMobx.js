import React from "react";
import useStores from "../hooks/useStores";
import { observer } from "mobx-react";

function TestMobx() {
  const {
    userStore: { currentUser, login, logout }
  } = useStores();

  return (
    <>
      <h4>username: {currentUser.username}</h4>
      <h4>userid: {currentUser.userid}</h4>
      <h4>loggedin: {currentUser.loggedIn ? "True" : "False"}</h4>
      <button
        onClick={() => {
          login();
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          logout();
        }}
      >
        logout
      </button>
    </>
  );
}

export default observer(TestMobx);
