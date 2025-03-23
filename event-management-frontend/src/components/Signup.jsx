"use client";
import React, { useState } from "react";
import styles from "./Signup.module.css";

// Input Field Component
const InputField = ({ type, placeholder, name, value, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        name={name} // Add the name attribute
        placeholder={placeholder}
        className={styles.formInput}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

// Saving the data from each field
function Signup() {
  // State for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    firstname: "",
    lastname: "",
    address: "",
    dob: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending Data:", formData); // Debugging Log

    try {
      const response = await fetch("http://localhost:8080/api/organizer/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        mode: "cors"
      });

      const data = await response.text();
      console.log("Response from Server:", data); // Debugging Log
      alert(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to register.");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          {/* Form Header */}
          <header>
            <h1 className={styles.formTitle}>Create Account</h1>
            <div className={styles.divider} />
            <h2 className={styles.formSubtitle}>SignUp</h2>
          </header>

          {/* Input Grid */}
          <div className={styles.inputGrid}>
            <InputField type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
            <InputField type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            <InputField type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            <InputField type="text" placeholder="Phone No." name="phone" value={formData.phone} onChange={handleChange} />
            <InputField type="text" placeholder="First Name" name="firstname" value={formData.firstname} onChange={handleChange} />
            <InputField type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange} />
            <InputField type="text" placeholder="Last Name" name="lastname" value={formData.lastname} onChange={handleChange} />

            {/* Date of Birth Field with Calendar */}
            <InputField type="date" placeholder="DOB" name="dob" value={formData.dob} onChange={handleChange} />
          </div>

          {/* Form Actions */}
          <div className={styles.buttonContainer}>
            <button type="button" className={styles.backButton}>Back</button>
            <button type="submit" className={styles.createButton}>Create</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
