import React, { useState } from "react";
import styles from "./register.module.scss";
import Layout from "../../components/Layout/Layout";
import Logo from "../../components/Logo/Logo";
import TitlePage from "../../components/TitlePage/TitlePage";
import InputCommon from "../../components/InputCommon/InputCommon";
import ButtonMain from "../../components/ButtonMain/ButtonMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Formulario, MensajeError, MensajeExito } from "../../elementos/formularios";
import { Link } from "react-router-dom";
import firebase from "../../config/firebaseConfig";

function Register() {
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [nombre, setNombre] = useState({ campo: "", valido: null });
  const [password, setPassword] = useState({ campo: "", valido: null });
  const [validForm, setValidForm] = useState({ campo: "", valido: null });

  const expresiones = {
    password: /^.{6,12}$/, // 6 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email.valido === "true" && password.valido === "true" && nombre.valido === "true") {
      setValidForm({ campo: "", valido: true });

      try {
        const res = await firebase
          .auth()
          .createUserWithEmailAndPassword(email.campo, password.campo);
        await res.user.updateProfile({
          displayName: nombre.campo,
        });
        setValidForm({ campo: `${res.user.displayName} Esta registrado`, valido: true });
        setNombre({ campo: "", valido: null });
        setEmail({ campo: "", valido: null });
        setPassword({ campo: "", valido: null });
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setValidForm({
            campo: "Correo electronico ya esta en uso",
            valido: false,
          });
        } else {
          setValidForm({ campo: "Registro no exitoso", valido: false });
        }
      }
    } else {
      setValidForm({ campo: "Complete los campos", valido: false });
    }
  };

  return (
    <Layout type="main-login">
      <div className={styles.registerContainer}>
        <TitlePage>Registro</TitlePage>
        <Formulario className={styles.inputContainer} onSubmit={onSubmit}>
          <InputCommon
            name="nombre"
            type="text"
            placeholder="Introduce un nombre de perfil"
            leyendaError="Introduce un nombre para tu perfil"
            setState={setNombre}
            state={nombre}
            expresionRegular={expresiones.nombre}
          >
            Nombre
          </InputCommon>
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
          <InputCommon
            name="password"
            type="password"
            placeholder="Contraseña"
            leyendaError="la contraseña debe contener entre 6 a 12 dígitos"
            setState={setPassword}
            state={password}
            expresionRegular={expresiones.password}
          >
            Contraseña
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
          <ButtonMain type="submit">Registrarme</ButtonMain>
          {validForm.valido === true && <MensajeExito>{validForm.campo}</MensajeExito>}
        </Formulario>
        <Link className={styles.link} to="/login">
          <span>¿Ya tienes una cuenta? Inicia sesión</span>
        </Link>
      </div>
      <div>
        <Logo></Logo>
      </div>
    </Layout>
  );
}

export default Register;
