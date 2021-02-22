import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

const Routes = ({ setAuthentc }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/home">
        <Home setAuthentc={setAuthentc} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};
export default Routes;
