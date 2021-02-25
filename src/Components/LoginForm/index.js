import { React, useState } from "react";
import { TextField, Button } from "@material-ui/core";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [tech, setTech] = useState("");

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "mínimo de 8 digítos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial"
      )
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);

    axios
      .post("https://kenziehub.me/sessions", data)
      .then((response) => {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        localStorage.setItem("id", JSON.stringify(response.data.user.id));
        reset();
        history.push("/home");
      })
      .catch((error) => console.log("error"));
  };

  return (
    <form onSubmit={handleSubmit(handleForm)} noValidate autoComplete="off">
      <TextField
        margin="normal"
        variant="outlined"
        label="Email"
        name="email"
        color="primary"
        InputLabelProps={{
          shrink: true,
        }}
        inputRef={register}
        error={!!errors.contact}
        helperText={errors.contact?.message}
        size="small"
      />
      <br />
      <TextField
        margin="normal"
        variant="outlined"
        label="Senha"
        name="password"
        color="primary"
        InputLabelProps={{
          shrink: true,
        }}
        inputRef={register}
        error={!!errors.password}
        helperText={errors.password?.message}
        size="small"
      />
      <br />

      <Button type="submit" variant="contained" color="secondary">
        Enviar
      </Button>
    </form>
  );
};
export default LoginForm;
