import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "../../routes";
import { Fragment } from "react";
import logo from "./../../assets/newLogo.png";
import './index.styles.scss';

export default function NavigationBar() {
  return (
    <Fragment>
      <div style={{ backgroundColor: "black" }}>
        <div
          style={{ width: "85vw", margin: "auto" }}
          className="navigation-bar"
        >
          <Link className="logo-container" to={ROUTES.NAVBAR}>
            <img className="logo" src={logo} alt="" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to={ROUTES.SHOP}>
              SHOP
            </Link>
            <Link className="nav-link" to={ROUTES.LOGIN}>
              LOG IN
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
