import React from "react";
import LogoImg from "../../assets/logo_avocado.svg";
import styles from "./Logo.module.scss";

function Logo() {
  return (
    <div className={styles.container}>
      <img className={styles.imgLogo} src={LogoImg} alt="" />
      <h2>Avocado Notes</h2>
    </div>
  );
}

export default Logo;
