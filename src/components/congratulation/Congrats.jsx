import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Routes from "../../common/Routes";
import styles from "./Congrats.module.scss";

const Congrats = ({ handleClick }) => (
  <span className={styles.container}>
    <div className={styles.innerContainer}>
      <h2 className={styles.congratulations}>Congratulations!</h2>
      <div className={styles.text}>
        Your application has sent for verification, we will send the to your
        mail.
      </div>
      <Button
        onClick={() => handleClick(1)}
        className={styles.goHome}
        type="primary"
        block="true"
        size="large"
        htmlType="submit"
      >
        <Link to={Routes.HOME_PAGE}>Go Home</Link>
      </Button>
    </div>
  </span>
);

export default Congrats;
