import React from "react";
import { Form, Button, Input, Upload } from "antd";
import "antd/dist/antd.css";
import styles from "./StepTwo.module.scss";
import IconUpload from "../../assets/icons/upload.svg";

const StepTwo = ({
  handleClick,
  setStepTwoInfo,
  setCV,
  stepTwoInfo,
  setTwoFormValues
}) => {
  const handleSubmit = (values) => {
    handleClick(3);
    setTwoFormValues({
      ...values,
      cv: values.cv.fileList[0]
    });
  };

  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.error("Failed:", errorInfo);
  };

  const beforeUpload = (file) => {
    setCV(file);
    return false;
  };

  // const props = {
  //   name: "file.pdf",
  //   action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  //   headers: {
  //     authorization: "authorization-text"
  //   },
  //   onChange(info) {
  //     if (info.file.status !== "uploading") {
  //       // console.log(info.file, info.fileList);
  //     }
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   }
  // };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2 className={styles.stepOneHeadline}>
          Registration to the JetSoftPro Training Center
        </h2>
        <Form
          className={styles.formContainer}
          layout="vertical"
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          fields={stepTwoInfo}
          onFieldsChange={(_, allFields) => {
            setStepTwoInfo(allFields);
          }}
        >
          <Form.Item
            label="Linkedin"
            name="website"
            className={styles.containerInput}
            rules={[
              {
                type: "url",
                message: "Please input url !!!"
              },
              {
                required: true,
                message: "Please input url !!"
              }
            ]}
          >
            <Input
              placeholder="Add Your Linkedin Profile"
              className={styles.input}
            />
          </Form.Item>
          <Form.Item
            label="Skype"
            name="nickname"
            className={styles.containerInput}
            rules={[
              {
                required: true,
                message: "Add your Skype Profile!"
              }
            ]}
          >
            <Input
              className={styles.input}
              placeholder="Add Your Skype Profile"
            />
          </Form.Item>
          <Form.Item
            label="Mobile"
            name="phone"
            className={styles.containerInput}
            rules={[
              {
                pattern: /^([+]\d{2})?\d{10}$/,
                message: "Ex: +38XXXXXXXXXX"
              },
              {
                required: true,
                message: "Please input your phone number!"
              }
            ]}
          >
            <Input className={styles.input} placeholder="Enter Mobile Number" />
          </Form.Item>
          <Form.Item label="СV" name="cv" className={styles.containerInput}>
            <Upload
              className={styles.uploadItem}
              beforeUpload={beforeUpload}
              accept=".doc, docx,application/pdf, image/jpeg, .png"
              fileList={stepTwoInfo[3]?.value?.fileList}
            >
              <Button
                accept="image/*,.pdf"
                type="file"
                className={styles.upload}
                icon={
                  <img
                    className={styles.iconUpload}
                    src={IconUpload}
                    alt="Icon"
                  />
                }
              >
                Add Your CV
              </Button>
            </Upload>
          </Form.Item>
          <span className={styles.wrapperBtn}>
            <Button
              onClick={() => handleClick(1)}
              className={styles.btnBack}
              block="true"
              type="primary"
              size="large"
              htmlType="submit"
            >
              Back
            </Button>
            <Button
              className={styles.btnNextStep}
              block="true"
              type="primary"
              size="large"
              htmlType="submit"
            >
              Next Step
            </Button>
          </span>
        </Form>
      </div>
    </div>
  );
};

export default StepTwo;
