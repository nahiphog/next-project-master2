/* Import package components */
import React from "react";
import { route } from "../global";
import LessonPage from "../pages/LessonPage";

/* Import app components */
import InboxListPage from "../pages/InboxListPage";
import LearnListPage from "../pages/LearnListPage";

/* CSS Styles */
const ContainerStyles = {
  height: "calc(100vh - 56px)",
  width: "100vw",
  overflow: "auto",
  textAlign: "center"
};

export default function SubContent({ routeOption }) {
  function renderView() {
    switch (routeOption) {
      case route.close:
        return <p>todo: close</p>;
      case route.inboxListPage:
        return <InboxListPage />;
      case route.eventListPage:
        return <p>todo: eventList</p>;
      case route.teachListPage:
        return <p>todo: teachList</p>;
      case route.learnListPage:
        return <LearnListPage />;
      case route.bookmarkListPage:
        return <p>todo: bookmarkList</p>;
      case route.signinPage:
        return <p>todo: signinPage</p>;
      case route.signupPage:
        return <p>todo: signupPage</p>;
      case route.profilePage:
        return <p>todo: profilePage</p>;
      case route.lessonPage:
        return <LessonPage />;
      case route.createLearnPage:
        return <p>todo: createLearnPage</p>;
      case route.createTeachPage:
        return <p>todo: createTeachPage</p>;
      case route.createEventPage:
        return <p>todo: createEventPage</p>;
      case route.ratingPage:
        return <p>todo: ratingPage</p>;
      case route.todo:
        return <p>todo: please complete this component/page</p>;
      default:
        return new Error("This view does not exist");
    }
  }

  return (
    <>
      <div style={ContainerStyles}>{renderView()}</div>
    </>
  );
}
