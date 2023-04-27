import style from "./StudentLogin.module.css";

import { NavLink, useHistory } from "react-router-dom";

import { useState } from "react";
import axios from "axios";

function StudentLogin() {
  const [user, setUser] = useState({
    user_email: "",
    user_password: "",
  });

  function onTextFieldChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  let history = useHistory();

  const [check, setCheck] = useState(false);

  async function handleLogin() {
    let value = await axios.get("http://localhost:3333/user");

    for (let i = 0; i < value.data.length; i++) {
      if (
        value.data[i].user_email === user.user_email &&
        value.data[i].user_password === user.user_password
      ) {
        setCheck(true);
        alert("success");
        sessionStorage.setItem("user", user.user_email);
        history.push("/StudentDashboard");
      }
    }
    if (check) alert(" Wrong User Email or password");
  }

  return (
    <div id={style.container}>
      <div id={style.containerHeadingBox}>
        <h1>USER LOGIN</h1>
      </div>

      <div id={style.emailBox}>
        <label htmlFor="email">
          {" "}
          Email
          <input
            style={{ width: "350px" }}
            name="user_email"
            onChange={(e) => onTextFieldChange(e)}
            type="text"
            id={style.email}
          />
        </label>
      </div>

      <div id={style.passwordBox}>
        <label htmlFor="password">
          {" "}
          Password
          <input
            style={{ width: "350px" }}
            name="user_password"
            onChange={(e) => onTextFieldChange(e)}
            type="password"
            id={style.password}
          />
        </label>
      </div>

      <button id={style.login} onClick={handleLogin}>
        Login
      </button>

      <div style={{ color: "black" }} id={style.signup}>
        New to Portal?{" "}
        <button className="btn btn-primary">
          <NavLink style={{ color: "black" }} exact to="/StudentSignup">
            {" "}
            Register
          </NavLink>
        </button>
        <br />
        <br />
        <button
          style={{ height: "40px", justifyContent: "center" }}
          className="btn btn-dark"
        >
          <NavLink
            style={{ color: "white" }}
            id={style.goBackLink}
            exact
            to="/"
          >
            {" "}
            Go Back
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default StudentLogin;