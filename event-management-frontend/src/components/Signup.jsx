"use client";
import React, { useState } from "react";
import styles from "./Signup.module.css";

// Input Field Component
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

function Signup() {
  const [dob, setDob] = useState("");

  const handleDateChange = (e) => {
    setDob(e.target.value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <form className={styles.formContainer}>
          {/* Form Header */}
          <header>
            <h1 className={styles.formTitle}>Create Admin Account</h1>
            <div className={styles.divider} />
            <h2 className={styles.formSubtitle}>SignUp</h2>
          </header>

          {/* Input Grid */}
          <div className={styles.inputGrid}>
            <InputField type="text" placeholder="username" />
            <InputField type="email" placeholder="email@" />
            <InputField type="password" placeholder="password" />
            <InputField type="tel" placeholder="phoneNo." />
            <InputField type="text" placeholder="firstname" />
            <InputField type="text" placeholder="address" />
            <InputField type="text" placeholder="lastname" />

            {/* Date of Birth Field with Calendar */}
            <div className={styles.inputWrapper}>
              <input
                type="date"
                placeholder="DOB"
                className={`${styles.formInput} ${styles.dateInput}`}
                value={dob}
                onChange={handleDateChange}
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className={styles.buttonContainer}>
            <button className={styles.backButton}>Back</button>
            <button className={styles.createButton}>Create</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
