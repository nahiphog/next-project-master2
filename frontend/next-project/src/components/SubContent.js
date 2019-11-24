/* Import package components */
import React from "react";
import { route } from "../global";

export default function SubContent({ routeTo, routeOption }) {
  function renderView() {
    switch (routeOption) {
      case route.inboxList:
        return <p>todo: inboxList</p>;
      case route.eventList:
        return <p>todo: eventList</p>;
      case route.teachList:
        return <p>todo: teachList</p>;
      case route.learnList:
        return <p>todo: learnList</p>;
      case route.bookmarkList:
        return <p>todo: bookmarkList</p>;
      case route.signinPage:
        return <p>todo: signinPage</p>;
      case route.signupPage:
        return <p>todo: signupPage</p>;
      case route.profilePage:
        return <p>todo: profilePage</p>;
      case route.lessonPage:
        return <p>todo: lessonPage</p>;
      case route.createLearnPage:
        return <p>todo: createLearnPage</p>;
      case route.createTeachPage:
        return <p>todo: createTeachPage</p>;
      case route.createEventPage:
        return <p>todo: createEventPage</p>;
      case route.ratingPage:
        return <p>todo: ratingPage</p>;
      default:
        return new Error("This view does not exist");
    }
  }

  return (
    <>
      <p>Sub content</p>
      <div>{renderView()}</div>
    </>
  );
}
