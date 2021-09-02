import React from "react";
import FunctionalButton from "../FunctionalButton/FunctionalButton";
import NewNote from "../../assets/new-post.svg";
import OffSesion from "../../assets/off-button.svg";
import firebase from "../../config/firebaseConfig";
import styles from "./Aside.module.scss";

function AsideBar() {
  const signOut = () =>
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("sesion cerrada");
      })
      .catch((error) => {
        console.log(error);
      });
  return (
    <div className={styles.asideBar}>
      <FunctionalButton text="Nueva Nota" urlImg={NewNote}></FunctionalButton>
      <FunctionalButton
        onClick={() => signOut()}
        text="Cerrar Sesión"
        urlImg={OffSesion}
      ></FunctionalButton>
    </div>
  );
}

export default AsideBar;
