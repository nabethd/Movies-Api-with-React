import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../style.css";

const Login = ({ movies }) => {
  const [user, setUser] = useState({ name: "", email: "" });
  const [allusers, setAllusers] = useState([]);
  const history = useHistory();

  const userUrl = "http://jsonplaceholder.typicode.com/users";

  const url = "http://api.tvmaze.com/shows";
  useEffect(() => {
    (async () => {
      const resp = (await axios.get(url)).data.slice(0, 19);
      movies.loadMovies(resp);
    })();
  }, []);

  const importUsers = async () => {
    const res = (await axios.get(userUrl)).data;
    setAllusers(res);
  };
  importUsers();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = () => {
    for (let i = 0; i < allusers.length; i++) {
      if (allusers[i].name === user.name && allusers[i].email === user.email) {
        sessionStorage["userName"] = user.name;
        history.push("/HomePage");
        return;
      }
    }

    alert("User is not Valid !!");
  };

  return (
    <div
      id="loginPage"
      //   style={{
      //     backgroundColor: "white",
      //     width: "300px",
      //     height: "300px",
      //   }}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />{" "}
      <br />{" "}
      <input
        type="text"
        name="email"
        placeholder="Email"
        defaultChecked="false"
        onChange={handleChange}
      />{" "}
      <br />
      <button id="logbutton" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
