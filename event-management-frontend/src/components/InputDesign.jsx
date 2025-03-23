"use client";
import React from "react";
import styles from "./InputDesign.module.css";
import FormHeader from "./FormHeader";
import InputGrid from "./InputGrid";
import FormActions from "./FormActions";

function InputDesign() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <form className={styles.formContainer}>
          <FormHeader />
          <InputGrid />
          <FormActions />
        </form>
      </div>
    </section>
  );
}

export default InputDesign;
