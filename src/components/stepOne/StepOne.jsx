import React from "react";
import { Form, Button, Input, Select } from "antd";
import "antd/dist/antd.css";
import styles from "./StepOne.module.scss";
import Collapse from "../../assets/icons/collapse.svg";

const { Option } = Select;

const StepOne = ({
  handleClick,
  setStepOneInfo,
  stepOneInfo,
  setFirstFormValue
}) => {
  const handleSubmit = (values) => {
    setFirstFormValue(values);
    handleClick(2);
  };

  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.error("Failed:", errorInfo);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2 className={styles.stepHeadline}>
          Registration to the JetSoftPro Training Center
        </h2>
        <Form
          layout="vertical"
          className={styles.formContainer}
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          type="text"
          fields={stepOneInfo}
          onFieldsChange={(_, allFields) => {
            setStepOneInfo(allFields);
          }}
        >
          <Form.Item
            label="Full Name"
            name="name"
            className={styles.containerInput}
            rules={[
              {
                pattern: /^([A-Za-z]+ )+[A-Za-z-]+$|^[A-Za-z]+$/,
                message: "English please example: Name Surname "
              },
              {
                required: true,
                message: "Please input your full name!"
              }
            ]}
          >
            <Input
              placeholder="Enter Your Full Name"
              className={styles.input}
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            className={styles.containerInput}
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]}
          >
            <Input className={styles.input} placeholder="Enter Email" />
          </Form.Item>
          <Form.Item
            label="Course"
            suffix={<img src={Collapse} alt="" />}
            name="course"
            className={styles.containerInput}
            rules={[
              {
                required: true,
                message: "Select one from the example"
              }
            ]}
          >
            <Select
              placeholder="Choose Course"
              suffixIcon={<img src={Collapse} alt="" />}
              dropdownStyle={{
                borderRadius: "12px",
                backgroundColor: "#fbfafa",
                border: "1px solid #ed803a"
              }}
            >
              <Option className={styles.course} value="javaScript">
                Java Script
              </Option>
              <Option className={styles.course} value="java">
                Java
              </Option>
              <Option className={styles.course} value="python">
                Python
              </Option>
              <Option className={styles.course} value="dart">
                Dart
              </Option>
              <Option className={styles.course} value="C++">
                C++
              </Option>
              <Option className={styles.course} value="C#">
                C#
              </Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="English level"
            name="englishLevel"
            className={styles.containerInput}
            rules={[
              {
                required: true,
                message: "Select one from the example"
              }
            ]}
          >
            <Select
              placeholder="Add your English Level"
              suffixIcon={<img src={Collapse} alt="" />}
              dropdownStyle={{
                borderRadius: "12px",
                backgroundColor: "#fbfafa",
                border: "1px solid #ed803a"
              }}
            >
              <Option className={styles.course} value="elementary">
                A2-Elementary
              </Option>
              <Option className={styles.course} value="intermediate">
                B1-Intermediate
              </Option>
              <Option className={styles.course} value="upperIntermediate">
                B2-Upper intermediate
              </Option>
              <Option className={styles.course} value="advanced">
                C1-Advanced
              </Option>
              <Option className={styles.course} value="mastery">
                C2-Mastery
              </Option>
            </Select>
          </Form.Item>
          <Button
            className={styles.btnNextStep}
            type="primary"
            block="true"
            size="large"
            htmlType="submit"
          >
            Next Step
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default StepOne;
