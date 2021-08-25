import React from "react";
import styles from "./TitlePage.module.scss";
import hojasSup from "../../assets/hojas_sup.svg";
import hojasInf from "../../assets/hojas_inf.svg";

function TitlePage(props) {
  return (
    <div className={styles.titlePage}>
      <img src={hojasSup} className={styles.hojaSup} alt="hojas arriba" />
      <h2>{props.children}</h2>
      <img src={hojasInf} className={styles.hojaInf} alt="hojas abajo" />
    </div>
  );
}

export default TitlePage;
