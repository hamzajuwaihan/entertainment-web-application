import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Browse/owl.css';
function Featured() {
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="featured-games header-text">
          <div className="heading-section">
            <h4><em>Live</em> Streams</h4>
          </div>
          <div className="owl-features owl-carousel">
            <OwlCarousel items={3}
              className="owl-theme"
              loop
              autoplay
              nav
              margin={8} >
              <div className="item">
                <div className="thumb">
                  <img src="./user/assets/images/featured-01.jpg" />
                  <div className="hover-effect">
                    <h6>2.4K Streaming</h6>
                  </div>
                </div>
                <h4>CS-GO<br /><span>249K Downloads</span></h4>
                <ul>
                  <li><i className="fa fa-star" /> 4.8</li>
                  <li><i className="fa fa-download" /> 2.3M</li>
                </ul>
              </div>
              <div className="item">
                <div className="thumb">
                  <img src="./user/assets/images/featured-02.jpg" />
                  <div className="hover-effect">
                    <h6>2.4K Streaming</h6>
                  </div>
                </div>
                <h4>Gamezer<br /><span>249K Downloads</span></h4>
                <ul>
                  <li><i className="fa fa-star" /> 4.8</li>
                  <li><i className="fa fa-download" /> 2.3M</li>
                </ul>
              </div>
              <div className="item">
                <div className="thumb">
                  <img src="./user/assets/images/featured-03.jpg" />
                  <div className="hover-effect">
                    <h6>2.4K Streaming</h6>
                  </div>
                </div>
                <h4>Island Rusty<br /><span>249K Downloads</span></h4>
                <ul>
                  <li><i className="fa fa-star" /> 4.8</li>
                  <li><i className="fa fa-download" /> 2.3M</li>
                </ul>
              </div>
              <div className="item">
                <div className="thumb">
                  <img src="./user/assets/images/featured-01.jpg" />
                  <div className="hover-effect">
                    <h6>2.4K Streaming</h6>
                  </div>
                </div>
                <h4>CS-GO<br /><span>249K Downloads</span></h4>
                <ul>
                  <li><i className="fa fa-star" /> 4.8</li>
                  <li><i className="fa fa-download" /> 2.3M</li>
                </ul>
              </div>
              <div className="item">
                <div className="thumb">
                  <img src="./user/assets/images/featured-02.jpg" />
                  <div className="hover-effect">
                    <h6>2.4K Streaming</h6>
                  </div>
                </div>
                <h4>Gamezer<br /><span>249K Downloads</span></h4>
                <ul>
                  <li><i className="fa fa-star" /> 4.8</li>
                  <li><i className="fa fa-download" /> 2.3M</li>
                </ul>
              </div>
              <div className="item">
                <div className="thumb">
                  <img src="./user/assets/images/featured-03.jpg" />
                  <div className="hover-effect">
                    <h6>2.4K Streaming</h6>
                  </div>
                </div>
                <h4>Island Rusty<br /><span>249K Downloads</span></h4>
                <ul>
                  <li><i className="fa fa-star" /> 4.8</li>
                  <li><i className="fa fa-download" /> 2.3M</li>
                </ul>
              </div>
              </OwlCarousel>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="top-streamers">
          <div className="heading-section">
            <h4><em>Top</em> Streamers</h4>
          </div>
          <ul>
            <li>
              <span>01</span>
              <img src="./user/assets/images/avatar-01.jpg" style={{ maxWidth: 46, borderRadius: '50%', marginRight: 15 }} />
              <h6><i className="fa fa-check" /> LahutaM</h6>
              <div className="main-button">
                <a href="#">Follow</a>
              </div>
            </li>
            <li>
              <span>02</span>
              <img src="./user/assets/images/avatar-02.jpg" style={{ maxWidth: 46, borderRadius: '50%', marginRight: 15 }} />
              <h6><i className="fa fa-check" /> Kengan</h6>
              <div className="main-button">
                <a href="#">Follow</a>
              </div>
            </li>
            <li>
              <span>03</span>
              <img src="./user/assets/images/avatar-03.jpg" style={{ maxWidth: 46, borderRadius: '50%', marginRight: 15 }} />
              <h6><i className="fa fa-check" /> Areluwa</h6>
              <div className="main-button">
                <a href="#">Follow</a>
              </div>
            </li>
            <li>
              <span>04</span>
              <img src="./user/assets/images/avatar-04.jpg" style={{ maxWidth: 46, borderRadius: '50%', marginRight: 15 }} />
              <h6><i className="fa fa-check" /> Omeg</h6>
              <div className="main-button">
                <a href="#">Follow</a>
              </div>
            </li>
            <li>
              <span>05</span>
              <img src="./user/assets/images/avatar-01.jpg" style={{ maxWidth: 46, borderRadius: '50%', marginRight: 15 }} />
              <h6><i className="fa fa-check" /> GangTeam</h6>
              <div className="main-button">
                <a href="#">Follow</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Featured