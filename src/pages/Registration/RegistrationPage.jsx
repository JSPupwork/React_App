import React from "react";
import StepOne from "../../components/stepOne/StepOne";
import StepTwo from "../../components/stepTwo/StepTwo";
import StepThree from "../../components/stepThree/StepThree";
import Congrats from "../../components/congratulation/Congrats";

import styles from "./RegistrationPage.module.scss";
import Logo from "../../assets/images/Logo.svg";

const RegistrationPage = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const [firstFormValues, setFirstFormValue] = React.useState(1);
  const [stepOneInfo, setStepOneInfo] = React.useState([
    {
      name: ["name"],
      value: ""
    },
    {
      name: ["email"],
      value: ""
    },
    {
      name: ["course"],
      value: null
    },
    {
      name: ["englishLevel"],
      value: null
    }
  ]);
  const [twoFormValues, setTwoFormValues] = React.useState(2);
  const [stepTwoInfo, setStepTwoInfo] = React.useState([
    {
      name: ["website"],
      value: ""
    },
    {
      name: ["email"],
      value: "nickname"
    },
    {
      name: ["phone"],
      value: null
    },
    {
      name: ["cv"],
      value: null
    }
  ]);
  const [threeFormValues, setThreeFormValues] = React.useState(3);
  const [stepThreeInfo, setStepThreeInfo] = React.useState([
    {
      name: ["password"],
      value: ""
    },
    {
      name: ["confirm"],
      value: ""
    },
    {
      name: ["location"],
      value: ""
    },
    {
      name: ["aboutUs"],
      value: null
    },
    {
      name: ["agreement"],
      value: null
    }
  ]);
  const [cv, setCV] = React.useState(null);
  const handleClick = (value) => {
    setActiveStep(value);
  };
  const a = {
    ...firstFormValues,
    ...twoFormValues,
    ...threeFormValues
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img className={styles.logo} src={Logo} alt="logo" />
        <div
          className={
            activeStep === 4
              ? styles.wrapperStepperInvisible
              : styles.wrapperStepper
          }
        >
          <div className={styles.stepOne} />
          <div
            className={activeStep >= 2 ? styles.stepTwoActive : styles.stepTwo}
          />
          <div
            className={
              activeStep >= 3 ? styles.stepThreeActive : styles.stepThree
            }
          />
        </div>
        {activeStep === 1 && (
          <StepOne
            handleClick={handleClick}
            setStepOneInfo={setStepOneInfo}
            stepOneInfo={stepOneInfo}
            setFirstFormValue={setFirstFormValue}
          />
        )}
        {activeStep === 2 && (
          <StepTwo
            handleClick={handleClick}
            setStepTwoInfo={setStepTwoInfo}
            stepTwoInfo={stepTwoInfo}
            setTwoFormValues={setTwoFormValues}
            setCV={setCV}
          />
        )}
        {activeStep === 3 && (
          <StepThree
            handleClick={handleClick}
            setStepThreeInfo={setStepThreeInfo}
            stepThreeInfo={stepThreeInfo}
            setThreeFormValues={setThreeFormValues}
          />
        )}
      </div>
      {activeStep === 4 && <Congrats handleClick={handleClick} />}
    </div>
  );
};
export default RegistrationPage;
