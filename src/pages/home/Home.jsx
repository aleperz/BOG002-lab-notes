import React from "react";
import ButtonMain from "../../components/ButtonMain/ButtonMain";
import Logo from "../../components/Logo/Logo";
import Layout from "../../components/Layout/Layout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout type="main-home">
      <Logo></Logo>
      <Link to="/login">
        <ButtonMain type="button">Inicia Sesión!</ButtonMain>
      </Link>
      <Link to="/register">
        <ButtonMain type="button">Registrate!</ButtonMain>
      </Link>
    </Layout>
  );
}

export default Home;
