import React, { useEffect } from 'react'
import '../index.css';
import NavBar from './AdminDashboard/NavBar';
import { Outlet } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/movies/moviesActions';

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = 'Dashboard';
    dispatch(fetchMovies());
  }, [])
  return (
    <>
      <NavBar />
      <Outlet />
    </>

  )
}

export default Dashboard