
// import './App.css';
import { Route, Routes } from 'react-router-dom';
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
    <Provider store={store}>
      <Preloader />

      <NavBar />

      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-content">
            <Routes>
    
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/Browse" element={<Browse />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/Streams" element={<Streams />} />
            <Route path="/Profile" element={<Profile />} />
           

          </Routes>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </Provider>
    </>
  );
}

export default App
