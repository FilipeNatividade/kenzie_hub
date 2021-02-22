import axios from "axios";
import { useState, useEffect } from "react";
import HomePage from "../../Components/HomePage";

const Home = () => {
  const [user, setUser] = useState({});

  const [token, setToken] = useState(() => {
    const storageToken = localStorage.getItem("token") || "";
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

  return (
    <div>
      <h2>HOME</h2>
      <HomePage />
    </div>
  );
};
export default Home;
