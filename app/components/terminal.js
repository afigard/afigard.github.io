// components/Terminal.js
import React from "react";
import styles from "./Terminal.module.css";

const Terminal = ({ children }) => {
  return (
    <div className={styles.terminalContainer}>
      <div className={styles.terminalHeader}>
        <div className={styles.buttons}>
          <span className={styles.close}></span>
          <span className={styles.minimize}></span>
          <span className={styles.maximize}></span>
        </div>
        <div className={styles.title}>
          Terminal&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        </div>
      </div>
      <div className={styles.terminalBody}>
        <pre className={styles.terminalPre}>
          <code className={styles.terminalCode}>{children}</code>
        </pre>
      </div>
    </div>
  );
};

export default Terminal;
