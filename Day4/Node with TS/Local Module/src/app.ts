import { logActivity } from "./logger";

function login(username: string, password: string) {
  try {
    logActivity(username, "login function and trying to log in");

    // business logic for login
    if (username == "sudha" && password == "123") {
      logActivity(username, "credentials are validated");
    } else {
      logActivity(username, "invalid user");
    }
  } catch (e) {
    logActivity(username, "login - there was an exception " + e);
  }
}
login("Sudha","123")