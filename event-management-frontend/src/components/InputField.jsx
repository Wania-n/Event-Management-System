import React from "react";
import styles from "./InputDesign.module.css";

const InputField = ({ type, placeholder }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        className={styles.formInput}
      />
    </div>
  );
};

export default InputField;
