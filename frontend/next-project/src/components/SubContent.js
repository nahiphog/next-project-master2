/* Import package components */
import React from "react";
import { route } from "../global";
import LessonPage from "../pages/LessonPage";

/* Import app components */
import InboxListPage from "../pages/InboxListPage";
import LearnListPage from "../pages/LearnListPage";
import BookmarksPage from "../pages/BookmarksPage";
import TeachListPage from "../pages/TeachListPage";
import CreateEventPage from "../pages/CreateEventPage";

/* CSS Styles */
const ContainerStyles = {
  height: "calc(100vh - 56px)",
  width: "100vw",
  overflow: "auto",
  textAlign: "center"
};

export default function SubContent({ routeTo, routeOption }) {
  function renderView() {
    switch (routeOption) {
      case route.close:
        return <p>todo: close</p>;
      case route.inboxListPage:
        return <InboxListPage parentRouteTo={routeTo} />;
      case route.eventListPage:
        return <p>todo: eventList</p>;
      case route.teachListPage:
        return <TeachListPage parentRouteTo={routeTo} />;
      case route.learnListPage:
        return <LearnListPage parentRouteTo={routeTo} />;
      case route.bookmarkListPage:
        return <BookmarksPage parentRouteTo={routeTo} />;
      case route.signinPage:
        return <p>todo: signinPage</p>;
      case route.signupPage:
        return <p>todo: signupPage</p>;
      case route.profilePage:
        return <p>todo: profilePage</p>;
      case route.lessonPage:
        return <LessonPage parentRouteTo={routeTo} />;
      case route.createLearnPage:
        return <p>todo: createLearnPage</p>;
      case route.createTeachPage:
        return <p>todo: createTeachPage</p>;
      case route.createEventPage:
        return <CreateEventPage parentRouteTo={routeTo} />;
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
