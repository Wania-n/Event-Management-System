import React from "react";
import styles from "./InputDesign.module.css";
import InputField from "./InputField";

const InputGrid = () => {
  return (
    <div className={styles.inputGrid}>
      <InputField type="text" placeholder="username" />
      <InputField type="email" placeholder="email@" />
      <InputField type="password" placeholder="password" />
      <InputField type="tel" placeholder="phoneNo." />
      <InputField type="text" placeholder="firstname" />
      <InputField type="text" placeholder="address" />
      <InputField type="text" placeholder="lastname" />
      <InputField type="text" placeholder="DOB" />
    </div>
  );
};

export default InputGrid;
