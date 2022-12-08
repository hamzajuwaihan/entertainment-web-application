
// import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Library from './components/Library';
import MostPopular from './components/MostPopular';
import NavBar from './components/NavBar';
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
              <Banner />
              <MostPopular />
              <Library />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App
