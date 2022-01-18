import { React } from "react";
import { Link } from "react-router-dom";
import Routes from "../common/Routes";

const NavBar = () => (
  <nav>
    <div>
      <Link to={Routes.REGISTRATION_PAGE}>Registration</Link>
    </div>
    <div>
      <Link to={Routes.HOMEWORK_PAGE}>Homeworks</Link>
    </div>
    <div>
      <Link to={Routes.DASHBOARD_PAGE}>Dashboard</Link>
    </div>
    <div>
      <Link to={Routes.NOTIFICATION_PAGE}>Notification</Link>
    </div>
    <div>
      <Link to={Routes.SCHEDULE_PAGE}>Schedule</Link>
    </div>
    <div>
      <Link to={Routes.PROFILE_PAGE}>Profile</Link>
    </div>
    <div>
      <Link to={Routes.TESTS_PAGE}>Tests</Link>
    </div>
    {/*
    {/* <div>
      <Link to={Routes.SCHEDULER_PAGE}>Schedule</Link>
    </div>

    {/*
    {/* <div>
      <Link to={Routes.SCHEDULER_PAGE}>Schedule</Link>
    </div>
    <div>
      <Link to={Routes.SETTINGS_PAGE}>Settings</Link>
    </div>
    <div>
      <Link to={Routes.LOGIN_PAGE}>Log out</Link>
    </div> */}
  </nav>
);
export default NavBar;
