import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login-container">
      <h1 className="welcome">
        <span>Welcome to our App!</span>
        </h1>
        
        <div className="animated-text">
          <span className="text-1">Login to continue...</span>
          <br />
          <span className="text-2">Budget friendly</span>
          <br />
          <span className="text-3">Best rooms</span>
          <br />
          <span className="text-4">PG</span>
        </div>
      

      <div className="lContainer">
        <label>Username:</label>
        <input
          type="text"
          placeholder="username"
          id="username"
          value={credentials.username}
          onChange={handleChange}
          className="lInput"
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          value={credentials.password}
          onChange={handleChange}
          className="lInput"
        />
        <br />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        <p >
          Don't have an account? Click <a href="/register">here</a> to sign up!
        </p>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
