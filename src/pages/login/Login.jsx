import React, { useState, useContext } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./login.module.scss";
import SocialButton from "../../components/SocialButton/SocialButton";
import fbIcon from "../../assets/fb_logo.svg";
import googleIcon from "../../assets/google-icon.svg";
import TitlePage from "../../components/TitlePage/TitlePage";
import Logo from "../../components/Logo/Logo";
import InputCommon from "../../components/InputCommon/InputCommon";
import { Formulario, MensajeError } from "../../elementos/formularios";
import ButtonMain from "../../components/ButtonMain/ButtonMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Link, Redirect } from "react-router-dom";
import firebase from "../../config/firebaseConfig";
import { AuthContext } from "../../services/Auth";

function Login() {
  const [email, setEmail] = useState({ campo: "", valido: null });
  const [password, setPassword] = useState({ campo: "", valido: null });
  const [validForm, setValidForm] = useState({ campo: "", valido: null });

  const expresiones = {
    password: /^.{6,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.valido === "true" && password.valido === "true") {
      setValidForm(true);

      firebase
        .auth()
        .signInWithEmailAndPassword(email.campo, password.campo)
        .then((res) => console.log("usuario logueado"))
        .catch((err) => console.log(err.message));

      setEmail({ campo: "", valido: null });
      setPassword({ campo: "", valido: null });
    } else {
      setValidForm(false);
    }
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/timeline" />;
  }

  return (
    <Layout type="main-login">
      <div className={styles.loginContainer}>
        <TitlePage>Iniciar Sesion</TitlePage>
        <SocialButton type="facebook" imgSrc={fbIcon}>
          Continuar con Facebook
        </SocialButton>
        <SocialButton type="google" imgSrc={googleIcon}>
          Continuar con Google
        </SocialButton>
        <span className={styles.hrContainer}>ó</span>
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
          {validForm === false && (
            <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
                <b>Error:</b>Por favor completa los campos.
              </p>
            </MensajeError>
          )}
          <ButtonMain type="submit">Iniciar Sesión</ButtonMain>
        </Formulario>
        <div className={styles.linkRedirect}>
          <Link className={styles.link} to="/reset">
            <p>¿Olvidaste tu contraseña?</p>
          </Link>
          <Link className={styles.link} to="/register">
            <p>¿No tienes una cuenta? Registrate</p>
          </Link>
        </div>
      </div>
      <div>
        <Logo></Logo>
      </div>
    </Layout>
  );
}

export default Login;
