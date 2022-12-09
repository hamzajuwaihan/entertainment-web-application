import React from 'react'
import { NavLink } from 'react-router-dom';
function showBox() {
    const status = document.getElementById("nav-box-minimize").style.display;
    if (status === "none") {
        document.getElementById("nav-box-minimize").style.display = "block";
    }
    else {
        document.getElementById("nav-box-minimize").style.display = "none";
    }
}
const NavBar = () => {
    return (
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <a href="index.html" className="logo">
                                    <img src="./user/assets/images/logo.png" alt="" />
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
                                    <li><NavLink to="register">Register</NavLink></li>
                                    <li><NavLink to="/login">Log In</NavLink></li>
                                    <li><NavLink to="/Browse">Browse</NavLink></li>
                                    <li><NavLink to="/Details">Details</NavLink></li>
                                    <li><NavLink to="/Streams">Streams</NavLink></li>
                                    <li><NavLink to="Profile">Profile <img src="./user/assets/images/profile-header.jpg" alt="" /></NavLink></li>
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