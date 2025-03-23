import React from "react";
import styles from "./InputDesign.module.css";

const FormActions = () => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.backButton}>Back</button>
      <button className={styles.createButton}>Create</button>
    </div>
  );
};

export default FormActions;
