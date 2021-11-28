// scss
import "./../../assets/scss/header.scss";
// icons
import { IoFastFood } from "react-icons/io5";
// routes, hooks
import { NavLink } from "react-router-dom";
import { useContext } from "react";
// context
import AuthContext from "../../store/auth-context";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isUserLoggedIn;
  const isAdminLoggedIn = authCtx.isUserAdmin;
  const showProductPage = !authCtx.isUserAdmin && isLoggedIn;

  /**
   * Handler when user log out
   */
  const logOutHandler = () => {
    authCtx.LoggedOut();
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
        <div className="container-fluid">
          <div className="logo">
            Express <IoFastFood /> Eats
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/Home"
                  className="nav-link"
                  aria-current="page"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              {showProductPage && (
                <li className="nav-item">
                  <NavLink
                    to="/Product"
                    className="nav-link"
                    aria-current="page"
                    activeClassName="active"
                  >
                    Product
                  </NavLink>
                </li>
              )}
              {isAdminLoggedIn && (
                <li className="nav-item">
                  <NavLink
                    to="/AddProduct"
                    className="nav-link"
                    aria-current="page"
                    activeClassName="active"
                  >
                    Add Product
                  </NavLink>
                </li>
              )}
              {isAdminLoggedIn && (
                <li className="nav-item">
                  <NavLink
                    to="/ViewProduct"
                    className="nav-link"
                    aria-current="page"
                    activeClassName="active"
                  >
                    View Products
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <NavLink
                    to="/Login"
                    className="nav-link"
                    aria-current="page"
                    activeClassName="active"
                    onClick={logOutHandler}
                  >
                    Logout
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <div className="emailInfo">({authCtx.userEmailId})</div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
