import React from "react";
import { X as Close } from "react-feather";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import styles from "./drawer.module.css";

function Drawer({ handleDismiss, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop} />
      <div className={styles.drawer}>
        <div>{children}</div>
        <button className={styles.closeBtn} onClick={handleDismiss}>
          <Close size={18} /> Dismiss
        </button>
      </div>
    </div>
  );
}

export default Drawer;
