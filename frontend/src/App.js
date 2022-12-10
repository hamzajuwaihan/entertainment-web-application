
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Preloader from './components/Preloader';
import Register from './components/Register';
import Login from './components/Login';
import Browse from './Pages/Browse';
import Details from './Pages/Details';
import Streams from './Pages/Streams';
import Profile from './Pages/Profile';
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {

  return (
    <>

      <Preloader />

      <NavBar />

      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-content">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
}

export default App
