import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { userClearInfo } from "../redux/users/usersActions";
function showBox() {
  const status = document.getElementById("nav-box-minimize").style.display;
  if (status === "none") {
    document.getElementById("nav-box-minimize").style.display = "block";
  } else {
    document.getElementById("nav-box-minimize").style.display = "none";
  }
}
const NavBar = () => {
    const dispatch = useDispatch();  
  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="index.html" className="logo">
                  <img src="/user/assets/images/logo.png" alt="" />
                </a>
                {/* <!-- ***** Logo End ***** -->
                <!-- ***** Search End ***** --> */}
                <div className="search-input">
                  <form id="search" action="#">
                    <input
                      type="text"
                      placeholder="Type Something"
                      id="searchText"
                      name="searchKeyword"
                      onkeypress="handle"
                    />
                    <i className="fa fa-search"></i>
                  </form>
                </div>
                {/* <!-- ***** Search End ***** -->
                <!-- ***** Menu Start ***** --> */}
                <ul className="nav" id="nav-box-minimize">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="register">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">Log In</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Browse">Browse</NavLink>
                  </li>
                  <li>
                    <NavLink to="/movies">Movies</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Streams">Streams</NavLink>
                  </li>

                  {sessionStorage.length === 0 ? (
                    <>
                      <li className="nav-item">
                        <NavLink className="nav-link" to={"/register"}>
                          Register
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to={"/login"}>
                          login
                        </NavLink>
                      </li>
                    </>
                  ) : null}
                  {sessionStorage.length !== 0 ? (
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {sessionStorage.getItem("name")}
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink className="dropdown-item" to="Profile">
                            Profile
                          </NavLink>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => dispatch(userClearInfo())}
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </li>
                  ) : null}

                  <li></li>
                </ul>
                <a className="menu-trigger" id="trigger" onClick={showBox}>
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
