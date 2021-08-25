import React from "react";
import styles from "./ButtonMain.module.scss";

function ButtonMain(props) {
  return (
    <button className={styles.buttonMain} type={props.type}>
      {props.children}
    </button>
  );
}

export default ButtonMain;
