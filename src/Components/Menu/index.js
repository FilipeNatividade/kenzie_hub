import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBAr: {},
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = ({ authentc, setAuthentc }) => {
  const history = useHistory();

  const classes = useStyles();

  const sendTo = (path) => {
    history.push(path);
  };

  const handleLogout = () => {
    localStorage.clear();
    setAuthentc(false);
    sendTo("/");
  };

  return (
    <div className={classes.root}>
      <AppBar color="secondary" className="appBar" position="static">
        <Toolbar>
          {authentc ? (
            <>
              <Button onClick={() => sendTo("/home")} color="inherit">
                Home
              </Button>
              <Button onClick={handleLogout} color="inherit">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button onClick={() => sendTo("/")} color="inherit">
                Login
              </Button>
              <Button onClick={() => sendTo("/register")} color="inherit">
                Register
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default ButtonAppBar;
