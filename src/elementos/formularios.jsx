import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colores = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d",
  amarillo: "#ffea00",
  violeta: "#400041",
};

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  color: ${colores.amarillo};
  cursor: pointer;

  ${(props) =>
    props.valido === "false" &&
    css`
      color: ${colores.error};
    `}
`;

const GrupoInput = styled.div`
  width: 300px;
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
  width: 300px;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0 30px rgba(163, 163, 164, 0.4);
  }

  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid transparent;
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid ${colores.error} !important;
    `}
`;

const LeyendaError = styled.p`
  font-size: 12px;
  margin-bottom: 3px;
  margin-top: 3px;
  color: ${colores.error};
  background: #ffffffc7;
  width: 300px;
  display: none;

  ${(props) =>
    props.valido === "false" &&
    css`
      display: block;
    `}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${(props) =>
    props.valido === "true" &&
    css`
      opacity: 1;
      color: ${colores.exito};
    `}

  ${(props) =>
    props.valido === "false" &&
    css`
      opacity: 1;
      color: ${colores.error};
    `}
`;

const IconoEye = styled(FontAwesomeIcon)`
  position: absolute;
  right: 30px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${(props) =>
    props.visible === "password" &&
    css`
      opacity: 1;
    `}
`;

const MensajeExito = styled.p`
  font-size: 14px;
  color: ${colores.exito};
`;
const MensajeError = styled.div`
  height: 45px;
  line-height: 45px;
  background: #f660609e;
  padding: 0px 8px;
  border-radius: 3px;
  margin-top: 10px;
  display: flex;
  p {
    margin: 0;
  }
  b {
    margin: 0px 5px;
  }
`;

export {
  Formulario,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  IconoValidacion,
  IconoEye,
  MensajeError,
  MensajeExito,
};
