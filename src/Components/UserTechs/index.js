import { React, useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Details from "../Details";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const UserTechs = () => {
  const [userData, setUserData] = useState([]);

  const classes = useStyles();

  const history = useHistory();

  const schema = yup.object().shape({
    title: yup.string().required(),
    status: yup.string().required(),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const dataUser = () => {
    const id = JSON.parse(localStorage.getItem("id"));
    axios.get(`https://kenziehub.me/users/${id}`).then((response) => {
      console.log(response.data);
      setUserData([
        response.data.name,
        response.data.email,
        response.data.contact,
      ]);
    });
  };

  const handleTech = (data) => {
    console.log(data);
    const token = JSON.parse(localStorage.getItem("token"));
    const config = { headers: { Authorization: `Bearer ${token}` } };
    axios
      .post("https://kenziehub.me/users/techs", data, config)
      .then((response) => {
        dataUser();
      })
      .catch((error) => console.log("error"));
  };

  useEffect(() => {
    dataUser();
  }, []);
  console.log(userData);

  return (
    <>
      <div
        style={{
          padding: "0 2vw",
          width: "30vw",
          margin: "3vw auto",
          boxSizing: "content-box",
        }}
      >
        <Card className={classes.root} position="static">
          <CardContent>
            <Details userData={userData} setUserData={setUserData} />
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </div>
      <div style={{ padding: "0 2vw", width: "30vw", margin: " auto" }}>
        <form
          style={{ margin: "0 auto" }}
          onSubmit={handleSubmit(handleTech)}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              margin="normal"
              variant="outlined"
              label="Tecnologias"
              name="title"
              color="primary"
              InputLabelProps={{
                shrink: true,
              }}
              inputRef={register}
              error={!!errors.tech}
              helperText={errors.tech?.message}
              size="small"
            />
            <br />
            <Select
              native
              defaultValue=""
              id="grouped-native-select"
              name="status"
              inputRef={register}
            >
              <optgroup label="Status">
                <option value={"Iniciante"}>Iniciante</option>
                <option value={"Intermediario"}>Intermediario</option>
                <option value={"Avançado"}>Avançado</option>
              </optgroup>
            </Select>
            <br />
            <br />
            <Button type="submit" variant="contained" color="secondary">
              Enviar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
export default UserTechs;

// response.data.user.tech
