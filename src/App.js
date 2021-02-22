import "./App.css";
import Routes from "./Routes";
import ButtonAppBar from "./Components/Menu";

const App = () => {
  return (
    <div className="App">
      <ButtonAppBar />
      <Routes />
    </div>
  );
};

export default App;
