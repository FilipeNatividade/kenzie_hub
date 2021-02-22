import axios from "axios";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import HomePage from "../../Components/HomePage";

const Home = ({ setAuthentc }) => {
  const [user, setUser] = useState({});

  const [token, setToken] = useState(() => {
    const storageToken = localStorage.getItem("token") || "";
    if (!storageToken) {
      return "";
    }
    setAuthentc(true);
    return JSON.parse(storageToken);
  });

  useEffect(() => {
    axios
      .get("https://kenziehub.me/profile", {
        headers: { Authorization: `Beare ${token}` },
      })
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  }, []);

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <HomePage />
    </>
  );
};
export default Home;
