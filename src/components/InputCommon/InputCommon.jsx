import React, { useState } from "react";
import {
  Label,
  GrupoInput,
  Input,
  IconoValidacion,
  IconoEye,
  LeyendaError,
} from "../../elementos/formularios";
import { faCheckCircle, faEye, faEyeSlash, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function InputCommon({
  children,
  placeholder,
  type,
  name,
  setState,
  state,
  leyendaError,
  expresionRegular,
}) {
  const [typeInput, setTypeInput] = useState(type);

  const onChange = (e) => {
    setState({ ...state, campo: e.target.value });
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(state.campo)) {
        setState({ ...state, valido: "true" });
      } else {
        setState({ ...state, valido: "false" });
      }
    }
  };

  const iconEyeClick = () => {
    if (typeInput === "password") {
      setTypeInput("text");
    } else {
      setTypeInput("password");
    }
  };

  return (
    <div>
      <Label htmlFor={name} valido={state.valido}>
        {children}
      </Label>
      <GrupoInput>
        <Input
          id={name}
          type={typeInput}
          placeholder={placeholder}
          onChange={onChange}
          value={state.campo}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={state.valido}
        />

        <IconoEye
          visible={name}
          onClick={iconEyeClick}
          icon={typeInput === "password" ? faEye : faEyeSlash}
        ></IconoEye>

        <IconoValidacion
          valido={state.valido}
          icon={state.valido === "true" ? faCheckCircle : faTimesCircle}
        />
      </GrupoInput>
      <LeyendaError valido={state.valido}>{leyendaError}</LeyendaError>
    </div>
  );
}

export default InputCommon;
