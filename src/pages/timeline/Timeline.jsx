import React from "react";
import firebase from "../../config/firebaseConfig";

function Timeline() {
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
    <div>
      <p>timeline</p>
      <button onClick={() => signOut()}>Cerrar Sesioon </button>
    </div>
  );
}

export default Timeline;
