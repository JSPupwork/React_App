import React from "react";
import "antd/dist/antd.css";
import styles from "./EmptyComponent.module.scss";

const EmptyComponent = ({ componentName }) => (
  <div className={styles.textWrapper}>
    <h1>You don&#39;t have any {componentName}...</h1>
  </div>
);

export default EmptyComponent;
