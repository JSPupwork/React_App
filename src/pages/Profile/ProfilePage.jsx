import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Input, Space, Select, message, Upload } from "antd";
import {
  LoadingOutlined,
  PlusOutlined,
  CloseOutlined
} from "@ant-design/icons";
import styles from "./ProfilePage.module.scss";
import style from "../Dashboard/DashboardPage.module.scss";
import Header from "../../components/header/Header";
import CollapseIcon from "../../assets/icons/collapse.svg";
import DisabledCollapseIcon from "../../assets/icons/grayCollapse.svg";
import Pencil from "../../assets/icons/pencil.svg";
import UploadIcon from "../../assets/icons/upload.svg";

const ProfilePage = () => {
  const { Option } = Select;
  const [editMode, setEditMode] = React.useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const [profileData, setProfileData] = React.useState({
    mobile: "+395658947584",
    fullName: "Yaryna",
    cv: null,
    location: "Lviv",
    skype: "hello",
    linkedIn: "http://localhost:3000/profile",
    email: "name@gmail.com",
    password: "hello12345",
    confirm: "hello12345"
  });

  const handleSubmit = (values) => {
    setProfileData(values);
    setEditMode(false);
  };

  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
    setEditMode(false);
  };

  const [imageUrl, setImageUrl] = React.useState();
  const [loading, setLoading] = React.useState(false);

  function getBase64(img, callback) {
    const reader = new global.FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  function beforeUploadAvatar(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }

  function beforeUploadCV() {
    return false;
  }

  const handleChangeImg = (info) => {
    getBase64(info.file.originFileObj, (imgUrl) => setImageUrl(imgUrl));
  };

  const handleRemove = () => {
    setImageUrl(false);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div>Upload</div>
    </div>
  );
  return (
    <div>
      <Header headerTitle="Profile" />
      <Form
        className={styles.profileForm}
        form={form}
        initialValues={profileData}
        onFinish={handleSubmit}
        layout="vertical"
        scrollToFirstError
      >
        <div className={styles.main}>
          <Form.Item className={styles.avatarContainer} name="field">
            <Upload
              disabled={!editMode}
              name="avatar"
              listType="picture-card"
              className={styles.avatar}
              showUploadList={false}
              beforeUpload={beforeUploadAvatar}
              onChange={handleChangeImg}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  className={`${styles.avatarImage} ${
                    editMode && styles.avatarImageEdit
                  } `}
                  alt="avatar"
                />
              ) : (
                uploadButton
              )}
            </Upload>
            {editMode && imageUrl && (
              <Button
                className={styles.circleBtn}
                shape="circle"
                onClick={handleRemove}
                icon={<CloseOutlined />}
              />
            )}
          </Form.Item>
          <div className={styles.baseInfo}>
            <h3 className={styles.headerOne}>Base Info</h3>
            <Form.Item
              name="fullName"
              label="Full Name"
              className={`${styles.marginTop} 
              ${styles.fullName}
              ${!editMode && styles.headerEdit}`}
              rules={[
                {
                  required: true,
                  message: "Input your name, please"
                }
              ]}
            >
              <Input
                disabled={!editMode}
                className={`${styles.inputDisabled} ${
                  editMode && styles.input
                }`}
                suffix={editMode && <img src={Pencil} alt="" />}
              />
            </Form.Item>
            <div className={`${styles.baseContainer} ${styles.marginTop}`}>
              <Form.Item
                label="СV"
                name="cv"
                className={`${styles.cvContainer} 
                ${!editMode && styles.headerEdit}`}
                rules={[
                  {
                    required: true,
                    message: "Upload your CV, please"
                  }
                ]}
              >
                <Upload
                  disabled={!editMode}
                  name="uploadCV"
                  beforeUpload={beforeUploadCV}
                  accept=".doc, docx,application/pdf"
                >
                  <Button
                    accept="image/*,.pdf"
                    type="file"
                    className={`${styles.inputDisabled} ${
                      editMode && styles.input
                    }`}
                    icon={
                      editMode && (
                        <img
                          src={UploadIcon}
                          alt="Icon"
                          className={styles.uploadIcon}
                        />
                      )
                    }
                  />
                </Upload>
              </Form.Item>
              <Form.Item
                name="location"
                label="Location"
                className={`${!editMode && styles.headerEdit} 
                ${styles.fullName}`}
                rules={[
                  {
                    required: true,
                    message: "Choose your city, please"
                  }
                ]}
              >
                <Select
                  disabled={!editMode}
                  dropdownClassName={styles.dropdown}
                  className={`${styles.inputDisabled} ${
                    editMode && styles.locationInput
                  }`}
                  suffixIcon={
                    editMode ? (
                      <img src={CollapseIcon} alt="" />
                    ) : (
                      <img src={DisabledCollapseIcon} alt="" />
                    )
                  }
                  ghost
                  defaultValue="City"
                >
                  <Option className={styles.option} value="kyiv">
                    Kyiv
                  </Option>
                  <Option className={styles.option} value="lviv">
                    Lviv
                  </Option>
                  <Option className={styles.option} value="vinnytsya">
                    Vinnytsya
                  </Option>
                  <Option className={styles.option} value="odesa">
                    Odesa
                  </Option>
                  <Option className={styles.option} value="kharkiv">
                    Kharkiv
                  </Option>
                  <Option className={styles.option} value="ivano-frankivsk">
                    Ivano-frankivsk
                  </Option>
                  <Option className={styles.option} value="chernivtsi">
                    Chernivtsi
                  </Option>
                </Select>
              </Form.Item>
            </div>
          </div>
        </div>
        <div>
          <h3 className={styles.header}>Learning Info</h3>
          <div className={styles.baseContainer}>
            <Form.Item
              className={styles.learningCourse}
              name="course"
              label="Course"
            >
              <Select
                disabled
                dropdownClassName={styles.dropdown}
                className={styles.learningSelect}
                suffixIcon={<img src={DisabledCollapseIcon} alt="" />}
                defaultValue=".Net Course"
              >
                <Option value=".net">.Net</Option>
                <Option value="frontEnd">FrontEnd</Option>
                <Option value="java">Java</Option>
                <Option value="testing">Testing</Option>
              </Select>
            </Form.Item>
            <Form.Item
              className={styles.learningLevel}
              name="level"
              label="English Level"
            >
              <Select
                disabled
                dropdownClassName={styles.dropdown}
                className={styles.level}
                suffixIcon={<img src={DisabledCollapseIcon} alt="" />}
                defaultValue="Advanced"
              >
                <Option value="pre-intermediate">Pre-intermediate</Option>
                <Option value="intermediate">Intermediate</Option>
                <Option value="upper-intermediate">Upper-intermediate</Option>
                <Option value="advanced">Advanced</Option>
              </Select>
            </Form.Item>
          </div>
        </div>
        <div>
          <h3 className={styles.header}>Contacts</h3>
          <div className={styles.baseContainer}>
            <Form.Item
              name="mobile"
              label="Mobile"
              className={`${styles.orangeLabel} ${styles.marginRight}
              ${!editMode && styles.headerEdit}`}
              rules={[
                {
                  pattern: /^([+]\d{2})?\d{10}$/,
                  message: "Ex: +38XXXXXXXXXX"
                },
                {
                  required: true,
                  message: "Fill in your phone number, please"
                }
              ]}
            >
              <Input
                disabled={!editMode}
                className={`${styles.inputDisabled} ${
                  editMode && styles.input
                }`}
                suffix={editMode && <img src={Pencil} alt="" />}
              />
            </Form.Item>
            <Form.Item
              name="skype"
              label="Skype"
              rules={[
                {
                  required: true,
                  message: "Fill in your skype, please"
                }
              ]}
              className={`${styles.orangeLabel} ${styles.marginRight}
              ${!editMode && styles.headerEdit}`}
            >
              <Input
                disabled={!editMode}
                className={`${styles.inputDisabled} ${
                  editMode && styles.input
                }`}
                suffix={editMode && <img src={Pencil} alt="" />}
              />
            </Form.Item>
            <Form.Item
              name="linkedIn"
              label="LinkedIn"
              className={`${styles.orangeLabel}
              ${!editMode && styles.headerEdit}`}
              rules={[
                {
                  type: "url",
                  message: "Input url, please"
                },
                {
                  required: true,
                  message: "Fill in your linkedIn, please"
                }
              ]}
            >
              <Input
                disabled={!editMode}
                className={`${styles.inputDisabled} ${
                  editMode && styles.input
                }`}
                placeholder="Text"
                suffix={editMode && <img src={Pencil} alt="" />}
              />
            </Form.Item>
          </div>
        </div>
        <div>
          <h3 className={styles.header}>Security</h3>
          <div className={styles.baseContainer}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid email"
                },
                {
                  required: true,
                  message: "Input your email, please"
                }
              ]}
              className={`${styles.marginTop} ${styles.marginRight}
              ${!editMode && styles.headerEdit}`}
            >
              <Input
                disabled={!editMode}
                className={`${styles.inputDisabled} ${
                  editMode && styles.input
                }`}
                suffix={editMode && <img src={Pencil} alt="" />}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/,
                  message:
                    "Min ten characters, at least one letter and one number"
                },
                {
                  required: true,
                  message: "Input your password, please"
                }
              ]}
              label="Password"
              className={`${styles.marginTop} ${styles.marginRight}
              ${!editMode && styles.headerEdit}`}
            >
              <Input.Password
                disabled={!editMode}
                className={`${styles.inputDisabled} ${
                  editMode && styles.input
                }`}
                suffix={editMode && <img src={Pencil} alt="" />}
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Confirm your password, please"
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Two passwords that you entered do not match")
                    );
                  }
                })
              ]}
              label="Confirm Password"
              className={`${styles.marginTop} ${styles.marginRight}
              ${!editMode && styles.headerEdit}`}
            >
              <Input.Password
                disabled={!editMode}
                className={`${styles.inputDisabled} ${
                  editMode && styles.input
                }`}
                suffix={editMode && <img src={Pencil} alt="" />}
              />
            </Form.Item>
          </div>
        </div>
        {!editMode && (
          <Button onClick={handleEditClick} className={styles.editBtn}>
            Edit
          </Button>
        )}

        {editMode && (
          <div>
            <Space>
              <Button
                htmlType="button"
                onClick={onReset}
                className={`${styles.button} ${styles.cancel}`}
              >
                Cancel
              </Button>
              <Button
                block="true"
                htmlType="submit"
                className={`${styles.button} ${styles.save}`}
              >
                Save
              </Button>
            </Space>
          </div>
        )}
      </Form>
    </div>
  );
};

export default ProfilePage;
