import { observable, decorate } from "mobx";

class UserStore {
  currentUser = {
    username: "logout",
    userid: "-1",
    loggedIn: false
  };

  login = () => {
    // Just hardcode for now to demonstrate function
    // Use axios call later
    this.currentUser.username = "login";
    this.currentUser.userid = "0";
    this.currentUser.loggedIn = true;
  };

  logout = () => {
    // Just hardcode for now to demonstrate function
    // Use axios call later
    this.currentUser.username = "logout";
    this.currentUser.userid = "-1";
    this.currentUser.loggedIn = false;
  };
}

decorate(UserStore, {
  currentUser: observable
});

const userStore = new UserStore();

export default userStore;
