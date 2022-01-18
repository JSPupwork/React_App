import React from "react";
import "antd/dist/antd.css";
import { Button, Input, Collapse } from "antd";
import style from "../../pages/Homework/Homework.module.scss";
import HomeworkItemText from "./HomeworkItemText/HomeworkItemText";
import CollapseIcon from "../../assets/icons/collapse.svg";
import Pencil from "../../assets/icons/pencil.svg";

const { Search } = Input;
const { TextArea } = Input;
const { Panel } = Collapse;

const HomeworkItem = ({ homeworkNumber }) => (
  <div>
    <section className={style.homeTask}>
      <Collapse
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => <img src={CollapseIcon} alt="" />}
        ghost
        expandIconPosition="right"
      >
        <Panel
          header={<HomeworkItemText homeworkNumber={homeworkNumber} />}
          key="1"
        >
          <p className={style.commentTitle}>Comment</p>
          <TextArea
            placeholder="Text"
            autoSize={{
              minRows: 4,
              maxRows: 4
            }}
          />
          <p className={style.uploadText}>Text</p>
          <div className={style.bottomContainer}>
            <form className={style.searchUploadForm}>
              <Input
                className={style.searchUploadInput}
                id="fname"
                placeholder="Search"
                suffix={<img src={Pencil} alt="" />}
              />
              <Button type="button" className={style.uploadHomeworkBtn}>
                Upload
              </Button>
            </form>
            <Button type="button" className={style.uploadHomeworkBtn}>
              Save
            </Button>
          </div>
        </Panel>
      </Collapse>
    </section>
  </div>
);

export default HomeworkItem;
