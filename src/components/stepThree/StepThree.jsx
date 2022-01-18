import React from "react";
import { Form, Button, Input, Select, Checkbox } from "antd";
import "antd/dist/antd.css";
import styles from "./StepThree.module.scss";
import Collapse from "../../assets/icons/collapse.svg";

const { Option } = Select;

const StepThree = ({
  handleClick,
  setStepThreeInfo,
  stepThreeInfo,
  setThreeFormValues
}) => {
  const handleSubmit = (values) => {
    handleClick(4);
    setThreeFormValues(values);
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
          className={styles.formContainer}
          layout="vertical"
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          fields={stepThreeInfo}
          onFieldsChange={(_, allFields) => {
            setStepThreeInfo(allFields);
          }}
        >
          <Form.Item
            label="Password"
            name="password"
            className={styles.containerInput}
            rules={[
              {
                // Minimum ten characters, at least one letter and one number:
                pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/,
                message:
                  "Min ten characters, at least one letter and one number"
              },
              {
                required: true,
                message: "Please input your password!"
              }
            ]}
            hasFeedback
          >
            <Input.Password className={styles.a} placeholder="Enter Password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirm"
            className={styles.containerInput}
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!"
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                }
              })
            ]}
          >
            <Input.Password
              className={styles.inputPassword}
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item
            className={styles.containerInput}
            label="Location"
            name="location"
            rules={[
              {
                required: true,
                message: "Enter your City!",
                whitespace: true
              }
            ]}
          >
            <Input placeholder="Add Your City" className={styles.input} />
          </Form.Item>
          <Form.Item
            className={styles.containerInput}
            label="Where did you her about us?"
            name="aboutUs"
            rules={[
              {
                required: true,
                message: "Select one from the example"
              }
            ]}
          >
            <Select
              placeholder="Choose place"
              suffixIcon={<img src={Collapse} alt="" />}
              dropdownStyle={{
                borderRadius: "12px",
                backgroundColor: "#fbfafa",
                border: "1px solid #ed803a"
              }}
            >
              <Option className={styles.course} value="instargram">
                Instargram
              </Option>
              <Option className={styles.course} value="facebook">
                Facebook
              </Option>
              <Option className={styles.course} value="friends">
                Friends
              </Option>
              <Option className={styles.course} value="another">
                Another
              </Option>
            </Select>
          </Form.Item>

          <Form.Item
            className={styles.wrapperCheckbox}
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement"))
              }
            ]}
          >
            <Checkbox className={styles.checkbox}>
              I agree to the <a href="null">PrivacyPolicy</a> &
              <a href="null">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          <span className={styles.wrapperBtn}>
            <Button
              onClick={() => handleClick(2)}
              className={styles.btnBack}
              block="true"
              type="primary"
              size="large"
            >
              Back
            </Button>
            <Button
              className={styles.btnRegister}
              block="true"
              type="primary"
              size="large"
              htmlType="submit"
            >
              Register
            </Button>
          </span>
        </Form>
      </div>
    </div>
  );
};

export default StepThree;
