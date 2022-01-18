import React from "react";
import Header from "../../components/header/Header";
import HomeworkItem from "../../components/HomeworkItem/HomeworkItem";
import EmptyComponent from "../../components/emptyComponent/EmptyComponent";

const Homework = () => {
  const homework = {
    hw1: {
      task1: "string1",
      task2: "string2"
    },
    hw2: {
      task1: "string1",
      task2: "string2"
    }
  };
  return (
    <div>
      <Header headerTitle="Homework" />
      {homework ? (
        <div>
          <HomeworkItem homeworkNumber="1" />
          <HomeworkItem homeworkNumber="2" />
        </div>
      ) : (
        <EmptyComponent componentName="homework" />
      )}
    </div>
  );
};

export default Homework;
