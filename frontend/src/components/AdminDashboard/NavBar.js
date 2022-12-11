import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { userClearInfo } from '../../redux/users/usersActions'

function NavBar() {
    const dispatch = useDispatch();
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark pl-auto">

            <Link class="navbar-brand pl-5 text-white" to="/dashboard" >DashBoard</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav flex-row d-none d-md-flex mx-auto">


                    <li class="nav-item me-3 me-lg-1 mx-5">
                        <a class="nav-link text-white" href="#">
                            <NavLink to={"/posts"}> <span><i class="fas fa-flag fa-lg px-2" style={{ color: '#f1c40f' }}></i>Posts </span></NavLink>
                        </a>
                    </li>

                    <li class="nav-item me-3 me-lg-1 mx-3">
                        <a class="nav-link text-white" href="#">
                            <NavLink to={"/dashboard/movies"}><span> <i class="fas fa-film fa-lg px-2" style={{ color: '#a51890' }}></i> Movies</span></NavLink>
                        </a>
                    </li>


                    <li class="nav-item me-3 me-lg-1">
                        <a class="nav-link text-white" href="#">
                            <NavLink to={"/dashboard/users"}><span> <i class="fas fa-user-friends fa-lg px-2" style={{ color: '#269ccf' }}></i>Users</span></NavLink>

                        </a>
                    </li>

                </ul>
            </div>
            <button type="button"  onClick={() => dispatch(userClearInfo())} class="btn btn-danger" style={{ float: 'right', marginRight: '2vw' }}> logout</button>
        </nav>
    )
}

export default NavBar