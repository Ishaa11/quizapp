import style from "./Home.module.css";
import pic1 from "../../images/1.png";
import pic2 from "../../images/2.png";
import pic3 from "../../images/3.jpg";

import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div style={{ backgroundColor: "aqua" }}>
      <div id={style.header}>
        <div id={style.headerHeadingBox}>
          <h3>Quiz App</h3>
        </div>
      </div>

      <div className="container" id={style.div2}>
        <div className={style.div3}>
          <NavLink exact to="/StudentLogin">
            <img src={pic2} alt="" />
            <span>User</span>
          </NavLink>
        </div>

        <div className={style.div3}>
          <NavLink to="/AdminLogin">
            <img src={pic3} alt="" />
            <span>Admin</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
