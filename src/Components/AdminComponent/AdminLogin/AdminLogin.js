import style from "./AdminLogin.module.css";

import { NavLink } from "react-router-dom";

import { useState } from "react";

import axios from "axios";

import { useHistory } from "react-router-dom";

function AdminLogin() {
  const [admin, setAdmin] = useState({
    admin_name: "",
    admin_password: "",
  });

  function handleInput(e) {
    setAdmin(
      {
        ...admin,
        [e.target.name]: e.target.value,
      },
      []
    );
  }
  let history = useHistory();

  async function login(e) {
    const value = await axios.get("http://localhost:3333/admin");

    //  console.log(value.data[0].admin_name);
    //  console.log(admin.admin_name);
    if (value.data[0].admin_name === admin.admin_name) {
      if (value.data[0].admin_password === admin.admin_password) {
        alert("success");
        history.push("/AdminDashboard");
      } else {
        alert("Wrong Password");
      }
    } else {
      alert("Wrong Admin name");
    }
  }

  return (
    <>
      <div id={style.container}>
        <div id={style.containerHeadingBox}>
          <h1>Admin Login</h1>
        </div>

        <div id={style.emailBox}>
          <label htmlFor="email">
            {" "}
            Email
            <input
              style={{ width: "340px" }}
              className="form-control"
              name="admin_name"
              onChange={(e) => handleInput(e)}
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
              style={{ width: "340px" }}
              className="form-control"
              name="admin_password"
              onChange={(e) => handleInput(e)}
              type="password"
              id={style.password}
            />
          </label>
        </div>
      </div>
      <div style={{ alignItems: "center" }}>
        <button
          style={{
            width: "500px",
            margin: "30px 30%",
            alignItems: "center",
            textAlign: "center",
          }}
          onClick={(e) => login(e)}
          id={style.login}
        >
          Login
        </button>
        <br />
        <button className="btn btn-dark" style={{ margin: "0px 45%" }}>
          <NavLink style={{ color: "white" }} to="/" id={style.goBackLink}>
            {" "}
            Go Back
          </NavLink>
        </button>
      </div>
    </>
  );
}

export default AdminLogin;