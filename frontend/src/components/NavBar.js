
import { userClearInfo } from "../redux/users/usersActions";
import { fetchMovies, searchMovie } from '../redux/movies/moviesActions';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink,Link, useLocation, useNavigate } from 'react-router-dom'

function showBox() {
    const status = document.getElementById("nav-box-minimize").style.display;
    if (status === "none") {
        document.getElementById("nav-box-minimize").style.display = "block";
    } else {
        document.getElementById("nav-box-minimize").style.display = "none";
    }
}
const NavBar = () => {

    const [search, setSearch] = useState('');
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchHandler = (e) => {
        e.preventDefault();
        if (search.trim() === '') {
            dispatch(fetchMovies());
            return;
        }
        dispatch(searchMovie(search));
        if (location.pathname !== '/movies') {
            navigate('/movies');
        }
    }


    return (
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <a href="/" className="logo">
                                    <img src="/user/assets/images/logo.png" alt="" />
                                </a>
                                {/* <!-- ***** Logo End ***** -->
                <!-- ***** Search End ***** --> */}

                                <div className="search-input">
                                    <form id="search" action="#" onSubmit={searchHandler}>
                                        <input
                                            type="search"
                                            placeholder="Type Something"
                                            id="searchText"
                                            name="search"
                                            onkeypress="handle"
                                            value={search} onChange={(e) => { setSearch(e.target.value) }}
                                        />
                                        <i className="fa fa-search"></i>
                                    </form>
                                </div>
                                {/* <!-- ***** Search End ***** -->*/}
                                <ul className="nav" id="nav-box-minimize">
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/About">About</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/Streams">Movies</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact">Contact</NavLink>
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
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {sessionStorage.getItem("name")}
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link className="dropdown-item" to="Profile">
                                                        Profile
                                                    </Link>
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
