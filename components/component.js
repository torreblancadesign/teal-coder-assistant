import React from 'react';
import styles from '../styles/style.module.css';

const Component = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Sign In</a>
      </nav>
      <div className={styles.hero}>
        <h1>AI Coding Assistant</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
          metus a massa ultrices ullamcorper vel id elit. Praesent bibendum purus
          eget dapibus iaculis.
        </p>
      </div>
      <footer className={styles.footer}>© 2021 AI Coding Assistant</footer>
    </>
  );
};

export default Component;