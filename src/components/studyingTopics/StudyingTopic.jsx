import PropTypes from "prop-types";
import React from "react";
import "antd/dist/antd.css";
import { Collapse } from "antd";
import CollapseIcon from "../../assets/icons/collapse.svg";
import styles from "./StudyingTopic.module.scss";

function StudyingTopic(props) {
  const { topic } = props;
  const { Panel } = Collapse;
  const text = "text";

  return (
    <>
      <div className={styles.topicContainer}>
        <Collapse
          bordered
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => (
            <img src={CollapseIcon} alt="" rotate={isActive ? 90 : 0} />
          )}
          ghost
          expandIconPosition="right"
        >
          <Panel header={topic}>
            <p>{text}</p>
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </>
  );
}

StudyingTopic.propTypes = {
  topic: PropTypes.string
};

StudyingTopic.defaultProps = {
  topic: "DefaultTest"
};

export default StudyingTopic;
