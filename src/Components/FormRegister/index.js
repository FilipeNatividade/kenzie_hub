import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const FormRegister = () => {
  const classes = useStyles();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    name: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
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
      .post("https://kenziehub.me/users", data)
      .then((response) => {
        reset();
        history.push("/");
      })
      .catch((error) => console.log("error"));
  };

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <div>
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
          error={!!errors.email}
          helperText={errors.email?.message}
          size="small"
        />
        <TextField
          margin="normal"
          variant="outlined"
          label="Nome"
          name="name"
          color="primary"
          InputLabelProps={{
            shrink: true,
          }}
          inputRef={register}
          error={!!errors.name}
          helperText={errors.name?.message}
          size="small"
        />
        <TextField
          margin="normal"
          variant="outlined"
          label="Bio"
          name="bio"
          color="primary"
          InputLabelProps={{
            shrink: true,
          }}
          inputRef={register}
          error={!!errors.bio}
          helperText={errors.bio?.message}
          size="small"
        />
        <br />
        <TextField
          margin="normal"
          variant="outlined"
          label="Modúlo do curso"
          name="course_module"
          color="primary"
          InputLabelProps={{
            shrink: true,
          }}
          inputRef={register}
          error={!!errors.course_module}
          helperText={errors.course_module?.message}
          size="small"
        />
        <TextField
          margin="normal"
          variant="outlined"
          label="Contato"
          name="contact"
          color="primary"
          InputLabelProps={{
            shrink: true,
          }}
          inputRef={register}
          error={!!errors.contact}
          helperText={errors.contact?.message}
          size="small"
        />
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
      </div>
    </form>
  );
};
export default FormRegister;
