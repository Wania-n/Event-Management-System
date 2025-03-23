import React from "react";
import styles from "./InputDesign.module.css";

const FormHeader = () => {
  return (
    <header>
      <h1 className={styles.formTitle}>Create Admin Account</h1>
      <div className={styles.divider} />
      <h2 className={styles.formSubtitle}>SignUp</h2>
    </header>
  );
};

export default FormHeader;
