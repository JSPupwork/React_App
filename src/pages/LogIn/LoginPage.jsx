import React from "react";
import { Form, Button, Input } from "antd";
import "antd/dist/antd.css";
import styles from "./LoginPage.module.scss";
import Logo from "../../assets/images/Logo.svg";

const LoginPage = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <div className={styles.innerContainer}>
        <h2 className={styles.logInHeadline}>Log In</h2>
        <Form className={styles.formContainer} layout="vertical">
          {/* <span className={styles.labelInputLinkedin}>Email</span> */}
          <Form.Item
            className={styles.containerInput}
            label="Email"
            name="email"
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
          {/* <span className={styles.labelInput}>Skype</span> */}
          <Form.Item
            label="Password"
            className={styles.containerInput}
            name="password"
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
            <Input.Password placeholder="Enter Password" />
          </Form.Item>
          {/* <span className={styles.labelInput}>Mobile</span> */}
          <Button
            className={styles.btnLogIn}
            block="true"
            type="primary"
            size="large"
            htmlType="submit"
          >
            Log In
          </Button>
        </Form>
      </div>
    </div>
  </div>
);

export default LoginPage;
