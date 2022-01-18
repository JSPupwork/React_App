import { React, useState } from "react";
import { Modal } from "antd";
import style from "./ModalWindow.module.scss";

const ModalWindow = ({ title, content, lector }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <span onClick={showModal} aria-hidden="true">
        <ul className={style.events}>
          <li className={style.day}>
            <span className={style.title}>{title}</span>
            <span className={style.content}>{content}</span>
            <span className={style.lector}>{lector}</span>
          </li>
        </ul>
      </span>
      <Modal
        footer={[]}
        title={title}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{content}</p>
        <p>{lector}</p>
      </Modal>
    </>
  );
};

export default ModalWindow;
