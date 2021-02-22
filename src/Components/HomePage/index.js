import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "70vh",
  },
  gridList: {
    display: "flex",
    justifyContent: "center",
  },
}));
const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        <img src="https://picsum.photos/500/500" />
      </GridList>
    </div>
  );
};
export default HomePage;
