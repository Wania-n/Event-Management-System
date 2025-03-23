"use client";
import * as React from "react";
import styles from "./EventHomePage.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.plantIt}>Plant- IT</h1>
      <nav className={styles.div}>
        <button className={styles.buttonBackground}>About Us</button>
        <button className={styles.buttonBackground2}>Login</button>
        <div className={styles.div2}>
          <button className={styles.buttonBackground3}>SignUp</button>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f8d3095c03fb3beef1852ee45bfd67166792abf?placeholderIfAbsent=true&apiKey=ba33c041a9dc4373926b68b1f965eca1"
            alt="Profile icon"
            className={styles.img}
          />
        </div>
      </nav>
    </header>
  );
}

function ActionPanel() {
  return (
    <section className={styles.div5}>
      <h2>Plan your event today!</h2>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/366fa60e28aaa894b32c929b076407c486f21d38?placeholderIfAbsent=true&apiKey=ba33c041a9dc4373926b68b1f965eca1"
        alt="Event planning illustration"
        className={styles.img3}
      />
      <button className={styles.buttonBackground4}>User</button>
      <button className={styles.buttonBackground5}>Admin</button>
      <p className={styles.version}>1.0.0 version</p>
    </section>
  );
}

function MainContent() {
  return (
    <main className={styles.div3}>
      <div className={styles.div4}>
        <section className={styles.column}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8494ddc42e80d79d2620c79c71f1776148dcb85c?placeholderIfAbsent=true&apiKey=ba33c041a9dc4373926b68b1f965eca1"
            alt="Event planning showcase"
            className={styles.img2}
          />
        </section>
        <aside className={styles.column2}>
          <ActionPanel />
        </aside>
      </div>
    </main>
  );
}

function EventHomePage() {
  return (
    <div className={styles.eventHomePage}>
      <Header />
      <MainContent />
    </div>
  );
}

export default EventHomePage;
