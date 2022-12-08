
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <!-- ***** Preloader Start ***** --> */}
      <div id="js-preloader" class="js-preloader">
        <div class="preloader-inner">
          <span class="dot"></span>
          <div class="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* <!-- ***** Preloader End ***** --> */}
      <header class="header-area header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="index.html" class="logo">
                  <img src="./user/assets/images/logo.png" alt=""/>
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
                <ul class="nav">
                  <li><a href="index.html" class="active">Home</a></li>
                  <li><a href="browse.html">Browse</a></li>
                  <li><a href="details.html">Details</a></li>
                  <li><a href="streams.html">Streams</a></li>
                  <li><a href="profile.html">Profile <img src="./user/assets/images/profile-header.jpg" alt=""/></a></li>
                </ul>
                <a class='menu-trigger'>
                  <span>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
