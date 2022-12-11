import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom'
import { userClearInfo } from '../../redux/users/usersActions'

function NavBar() {
    const dispatch = useDispatch();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark pl-auto">

            <Link className="navbar-brand pl-5 text-white" to="/dashboard" >DashBoard</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav flex-row d-none d-md-flex mx-auto">


                    <li className="nav-item me-3 me-lg-1 mx-5">
                        <a className="nav-link text-white" href="#">
                            <NavLink to={"/posts"}> <span><i className="fas fa-flag fa-lg px-2" style={{ color: '#f1c40f' }}></i>Posts </span></NavLink>
                        </a>
                    </li>

                    <li className="nav-item me-3 me-lg-1 mx-3">
                        <a className="nav-link text-white" href="#">
                            <NavLink to={"/dashboard/movies"}><span> <i className="fas fa-film fa-lg px-2" style={{ color: '#a51890' }}></i> Movies</span></NavLink>
                        </a>
                    </li>


                    <li className="nav-item me-3 me-lg-1">
                        <a className="nav-link text-white" href="#">
                            <NavLink to={"/dashboard/users"}><span> <i className="fas fa-user-friends fa-lg px-2" style={{ color: '#269ccf' }}></i>Users</span></NavLink>

                        </a>
                    </li>

                </ul>
            </div>
            <button type="button"  onClick={() => dispatch(userClearInfo())} className="btn btn-danger" style={{ float: 'right', marginRight: '2vw' }}> logout</button>
        </nav>
    )
}

export default NavBar