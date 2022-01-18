import { React } from "react";
import { Redirect, Switch, Route, useLocation } from "react-router-dom";
import Routes from "./common/Routes";
import NavBar from "./components/NavBar";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import HomeworkPage from "./pages/Homework/HomeworkPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import NotificationPage from "./pages/Notification/NotificationPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import TestsPage from "./pages/Tests/TestsPage";
import SchedulePage from "./pages/Schedule/SchedulePage";
import PublicRoute from "./components/routeHOC/PublicRoute";
import PrivateRoute from "./components/routeHOC/PrivateRoute";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LoginPage from "./pages/LogIn/LoginPage";
import "./App.scss";

function App() {
  const route = useLocation().pathname;
  const isAuth = true;
  const userRole = "student";
  return (
    <div className="App">
      {route !== "/login" && route !== "/404" && <NavBar />}
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            isAuth ? (
              <Redirect to={Routes.HOME_PAGE} />
            ) : (
              <Redirect to={Routes.LOGIN_PAGE} />
            )
          }
        />
        <PublicRoute
          isAuth={isAuth}
          component={RegistrationPage}
          path={Routes.REGISTRATION_PAGE}
        />
        {/* <PublicRoute authenticated={isAuth} component={LoginPage}
        path={Routes.LOGIN_PAGE} /> */}
        <PrivateRoute
          role={userRole}
          component={DashboardPage}
          path={Routes.DASHBOARD_PAGE}
        />
        <PrivateRoute
          role={userRole}
          component={HomeworkPage}
          path={Routes.HOMEWORK_PAGE}
        />
        <PrivateRoute
          role={userRole}
          component={NotificationPage}
          path={Routes.NOTIFICATION_PAGE}
        />
        <PrivateRoute
          role={userRole}
          component={ProfilePage}
          path={Routes.PROFILE_PAGE}
        />
        <PrivateRoute
          role={userRole}
          component={SchedulePage}
          path={Routes.SCHEDULER_PAGE}
        />
        {/* <PrivateRoute role={userRole} component={TestPage} path={Routes.TEST_PAGE} />
        <PrivateRoute
          role={userRole}
          component={SchedulePage}
          path={Routes.SCHEDULE_PAGE}
        />

        {/* <PrivateRoute role={userRole} component={SchedulerPage} path={Routes.SCHEDULER_PAGE} />
        <PrivateRoute role={userRole} component={TestPage} path={Routes.TEST_PAGE} />
        <PrivateRoute
          role={userRole}
          component={SchedulePage}
          path={Routes.SCHEDULE_PAGE}
        />
        <PublicRoute
          isAuth={isAuth}
          component={LoginPage}
          path={Routes.LOGIN_PAGE}
        />
        <PublicRoute
          isAuth={isAuth}
          component={ErrorPage}
          path={Routes.NOT_FOUND_PAGE}
        />
        {/* <PrivateRoute role={userRole}
          component={NotificationPage} path={Routes.NOTIFICATION_PAGE} />
        <PrivateRoute role={userRole} component={SchedulerPage} path={Routes.SCHEDULER_PAGE} />
        <PrivateRoute role={userRole} component={TestPage} path={Routes.TEST_PAGE} />
        <PrivateRoute role={userRole} component={ProfilePage} path={Routes.PROFILE_PAGE} />
        <PrivateRoute role={userRole} component={SettingsPage}  path={Routes.SETTINGS_PAGE} />
        <PrivateRoute role={userRole} component={HomePage} path={Routes.HOME_PAGE} />
        <Route path="*" component={NotFoundPage} /> */}
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
