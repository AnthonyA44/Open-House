import { Outlet } from "react-router-dom";
import "./Layout.css";
// import dog from "../../assets/dog.svg";

const Layout = () => {
  return (
    <>
      {/* header */}
      {/* <div class="header">
        <img class="logo" src={dog} alt="doggo"></img>
      </div> */}
      {/* <nav>
        <ul class="nav">
          <li>
            <Link to="/">Before</Link>
          </li>
          <li>
            <Link to="/after">After</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
      <div class="footer"></div>
    </>
  );
};

export default Layout;
