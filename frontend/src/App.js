
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Preloader from './components/Preloader';


function App() {

  return (
    <>



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
