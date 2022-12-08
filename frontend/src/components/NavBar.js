import React from 'react'
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
            <header class="header-area header-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <nav class="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <a href="index.html" class="logo">
                                    <img src="./user/assets/images/logo.png" alt="" />
                                </a>
                                {/* <!-- ***** Logo End ***** -->
                <!-- ***** Search End ***** --> */}
                                <div class="search-input">
                                    <form id="search" action="#">
                                        <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                                        <i class="fa fa-search"></i>
                                    </form>
                                </div>
                                {/* <!-- ***** Search End ***** -->
                <!-- ***** Menu Start ***** --> */}
                                <ul class="nav" id='nav-box-minimize' >
                                    <li><a href="index.html" class="active">Home</a></li>
                                    <li><a href="browse.html">Browse</a></li>
                                    <li><a href="details.html">Details</a></li>
                                    <li><a href="streams.html">Streams</a></li>
                                    <li><a href="profile.html">Profile <img src="./user/assets/images/profile-header.jpg" alt="" /></a></li>
                                </ul>
                                <a class='menu-trigger' id='trigger' onClick={showBox}>
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