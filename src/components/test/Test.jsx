import PropTypes from "prop-types";
import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import styles from "./Test.module.scss";

const Test = (props) => {
  const { testHeader, checkDate } = props;
  return (
    <div className={styles.testContainer}>
      <div className={styles.leftText}>
        <h4>
          {testHeader}
          <span> (30min)</span>
        </h4>
        <p>{checkDate}</p>
      </div>

      <Button className={styles.startBtn} type="submit">
        Start
      </Button>
    </div>
  );
};

Test.propTypes = {
  testHeader: PropTypes.string,
  checkDate: PropTypes.string
};

Test.defaultProps = {
  testHeader: "DefaultTest",
  checkDate: "DefaultTest"
};

export default Test;
