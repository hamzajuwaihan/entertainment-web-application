import React from 'react'
import { NavLink ,useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { userClearInfo } from '../redux/users/usersActions';

function showBox() {
    const status = document.getElementById("nav-box-minimize").style.display;
    if (status === "none") {
        document.getElementById("nav-box-minimize").style.display = "block";
    }
    else {
        document.getElementById("nav-box-minimize").style.display = "none";
    }
}


function NavBar() {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const location = useLocation();
    const navigate = useNavigate();

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
                                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                                        <i className="fa fa-search"></i>
                                    </form>
                                </div>
                                {/* <!-- ***** Search End ***** -->
                <!-- ***** Menu Start ***** --> */}
                                <ul className="nav" id='nav-box-minimize' >
                                    <li><NavLink to="/" >Home</NavLink></li>
                                    <li><NavLink to="/Browse">Browse</NavLink></li>
                                    <li><NavLink to="/movies">Movies</NavLink></li>
                                    <li><NavLink to="/Streams">Streams</NavLink></li>
                                    <li><NavLink to="About">About Us</NavLink></li>
                                    <li><NavLink to="Profile">Profile <img src="/user/assets/images/profile-header.jpg" alt="" /></NavLink></li>
                                </ul>
                                <a className='menu-trigger' id='trigger' onClick={showBox}>
                                    <span>Menu</span>
                                </a>
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default NavBar