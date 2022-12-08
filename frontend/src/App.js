
// import './App.css';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';

import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Preloader from './components/Preloader';

function App() {

  return (
    <>
      <Preloader />
      <NavBar />

      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-content">
            <Routes>
            <Route path="/" element={<Home />} />
           
          </Routes>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App
