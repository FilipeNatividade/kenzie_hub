import "./App.css";
import Routes from "./Routes";
import ButtonAppBar from "./Components/Menu";
import { useState } from "react";

const App = () => {
  const [authentc, setAuthentc] = useState(false);
  return (
    <div className="App">
      <ButtonAppBar authentc={authentc} setAuthentc={setAuthentc} />
      <Routes setAuthentc={setAuthentc} />
    </div>
  );
};

export default App;
