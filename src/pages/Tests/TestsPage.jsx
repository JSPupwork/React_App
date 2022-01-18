import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Test from "../../components/test/Test";
import styles from "../Dashboard/DashboardPage.module.scss";
import EmptyComponent from "../../components/emptyComponent/EmptyComponent";

const TestsPage = () => {
  const tests = {
    english: {
      q1: "string1",
      q2: "string2"
    },
    technical: {
      q1: "string1",
      q2: "string2"
    }
  };
  return (
    <div>
      <div className={styles.header}>
        <h1 className={styles.title}>Tests</h1>
        <Input
          className={styles.searchInput}
          placeholder="Search"
          type="text"
          prefix={<SearchOutlined className={styles.searchIcon} />}
        />
      </div>
      {tests ? (
        <div>
          <Test
            testHeader="English test"
            checkDate="Time & Date: 13:10 24.06.2021"
          />
          <Test
            testHeader="English interview"
            checkDate="Time & Date: 13:10 24.06.2021"
          />
          <Test
            testHeader="Technical test"
            checkDate="Time & Date: 13:10 24.06.2021"
          />
          <Test
            testHeader="Technical interview"
            checkDate="Time & Date: 13:10 24.06.2021"
          />
        </div>
      ) : (
        <EmptyComponent componentName="tests" />
      )}
    </div>
  );
};

export default TestsPage;
