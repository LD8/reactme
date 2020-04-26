import React from "react";
import styles from './LeftMiddleRightPanels.module.css'

export const LeftMiddleRightPanels = () => {
  return (
    <div className={styles.panel_box}>
      <div className={`${styles.panel_holder} ${styles.left_panel_holder}`}>
        <div className={`${styles.panel} ${styles.left_panel}`}></div>
      </div>
      <div className={`${styles.panel_holder} ${styles.middle_panel_holder}`}>
        <div className={`${styles.panel} ${styles.middle_panel}`}></div>
      </div>
      <div className={`${styles.panel_holder} ${styles.right_panel_holder}`}>
        <div className={`${styles.panel} ${styles.right_panel}`}></div>
      </div>
    </div>
  );
};
