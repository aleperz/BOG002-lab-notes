import React, { useState } from "react";
import styles from "../../pages/reset/reset.module.scss";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import TitlePage from "../../components/TitlePage/TitlePage";
import InputCommon from "../../components/InputCommon/InputCommon";
import ButtonMain from "../../components/ButtonMain/ButtonMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Formulario, MensajeError, MensajeExito } from "../../elementos/formularios";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConfig";

function Reset() {
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [validForm, setValidForm] = useState({ campo: "", valido: null });

  const expresiones = {
    password: /^.{6,12}$/, // 6 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email.valido === "true") {
      auth.sendPasswordResetEmail(email.campo);
      setValidForm({ campo: "correo para reset enviado", valido: true });
      setEmail({ campo: "", valido: null });
    } else {
      setValidForm({ campo: "complete los campos", valido: false });
      setEmail({ campo: "", valido: null });
    }
  };

  return (
    <Layout type="main-login">
      <div className={styles.registerContainer}>
        <TitlePage>Registro</TitlePage>
        <Formulario className={styles.inputContainer} onSubmit={onSubmit}>
          <InputCommon
            name="email"
            type="email"
            placeholder="Correo electronico"
            leyendaError="Este correo electrónico no es válido. Asegúrate de que tenga un formato como este: ejemplo@email.com"
            setState={setEmail}
            state={email}
            expresionRegular={expresiones.correo}
          >
            Correo electronico
          </InputCommon>
          {validForm.valido === false && (
            <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
                <b>Error:</b>
                {validForm.campo}
              </p>
            </MensajeError>
          )}
          <ButtonMain type="submit">Restablecer</ButtonMain>
          {validForm.valido === true && <MensajeExito>{validForm.campo}</MensajeExito>}
        </Formulario>
      </div>
      <div>
        <Logo></Logo>
      </div>
    </Layout>
  );
}

export default Reset;
