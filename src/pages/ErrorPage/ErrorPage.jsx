import React from "react";
import { Button } from "antd";

import { Link } from "react-router-dom";
import Routes from "../../common/Routes";
import styles from "./ErrorPage.module.scss";
import spaceMan from "../../assets/images/spaceMan.png";

const ErrorPage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Look like you&#39;re lost in space</h1>
    <img className={styles.spaceMan} src={spaceMan} alt="spaceman" />
    <Button
      className={styles.btnGoHome}
      block="true"
      type="primary"
      size="large"
      // htmlType="submit"
    >
      <Link to={Routes.HOME_PAGE}>Go Home</Link>
    </Button>
  </div>
);

export default ErrorPage;
