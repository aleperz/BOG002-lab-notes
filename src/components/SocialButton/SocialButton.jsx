import React from "react";
import styles from "./SocialButton.module.scss";

function SocialButton(props) {
  return (
    <button className={styles[props.type]}>
      <img src={props.imgSrc} alt={props.type} />
      <span>{props.children}</span>
    </button>
  );
}

export default SocialButton;
