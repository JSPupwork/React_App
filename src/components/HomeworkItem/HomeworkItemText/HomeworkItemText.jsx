import React from "react";
import style from "../../../pages/Homework/Homework.module.scss";

const HomeworkItemText = ({ homeworkNumber }) => (
  <div>
    <p className={style.homeworkTitle}>Homework {homeworkNumber}</p>
    <p className={style.homeworkText}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet
      nulla sit ametisi cursus efficitur. Nunc commodo quam id tellus luctus
      tristique. Maecenas elementum maximus assa vitae ultricies. Curabitur
      tempor dictum nisl, ac iaculis justo euismod ac. Duis olutpat eros sit
      amet arcu vulputate, in ultricies elit porta. Fusce venenatis dapibus mi
      uismod condimentum. Ut in diam sit amet justo sodales vulputate quis nec
      massa. Cras facilisis sapien justo, a convallis dolor iaculis id. Nam
      ipsum magna, tincidunt eget isus id, vehicula volutpat felis. Suspendisse
      eget nunc in erat tristique porttitor. Sed lementum lectus in odio aliquet
      pharetra. Suspendisse potenti. Ut porta ante ut laoreet ursus.
      Pellentesque magna justo, venenatis nec tortor in, vestibulum ullamcorper
      leo. Morbi fficitur convallis tristique. Vestibulum varius turpis et
      suscipit pulvinar. Ut fermentum, isus a consectetur ullamcorper, sapien
      elit molestie nunc, ac bibendum tortor elit vitae ortor. Ut congue
      ullamcorper sapien id pellentesque. Etiam ac arcu auctor, ultricies purus
      on, commodo dolor.
    </p>
  </div>
);

export default HomeworkItemText;
