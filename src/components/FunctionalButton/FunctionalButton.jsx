import React from "react";
import styles from "./FunctionalButton.module.scss";

function FunctionalButton({ urlImg, text, onClick }) {
  return (
    <div className={styles.buttonContainer} onClick={onClick}>
      <img src={urlImg} alt={text} />
      <p>{text}</p>
    </div>
  );
}

export default FunctionalButton;
