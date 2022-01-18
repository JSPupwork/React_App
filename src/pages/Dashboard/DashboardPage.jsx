import React from "react";
import "antd/dist/antd.css";
import { Progress } from "antd";
import styles from "./DashboardPage.module.scss";
import StudyingTopic from "../../components/studyingTopics/StudyingTopic";
import Header from "../../components/header/Header";

const DashboardPage = () => (
  <>
    <Header headerTitle="Dashboard" />
    <main>
      <div className={styles.progressLine}>
        <p>Functional components(forget about class components now)</p>
        <Progress percent={10} />
      </div>
      <h2>Your Course</h2>
      <StudyingTopic topic="Basics of react" />
      <StudyingTopic topic="Functional components(forget about class components now)" />
      <StudyingTopic topic="Hooks" />
      <StudyingTopic topic="API calls" />
      <StudyingTopic topic="Immutable.js" />
      <StudyingTopic topic="Frontend routing" />
      <StudyingTopic topic="Redux" />
      <StudyingTopic topic="Material UI" />
      <StudyingTopic topic="Webpack" />
    </main>
  </>
);

export default DashboardPage;
