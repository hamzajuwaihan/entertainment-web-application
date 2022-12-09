import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Browse/owl.css';
function LiveStreamStart() {
  return (
    <div className="live-stream">
      <div className="col-lg-12">
        <div className="heading-section">
          <h4><em>Most Popular</em> Live Stream</h4>
        </div>
      </div>
      <div className="row">
        <OwlCarousel items={3}
          className="owl-theme"
          loop
          autoplay
          nav
          margin={8} >
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="./user/assets/images/stream-05.jpg" alt />
                <div className="hover-effect">
                  <div className="content">
                    <div className="live">
                      <a href="#">Live</a>
                    </div>
                    <ul>
                      <li><a href="#"><i className="fa fa-eye" /> 1.2K</a></li>
                      <li><a href="#"><i className="fa fa-gamepad" /> CS-GO</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="down-content">
                <div className="avatar">
                  <img src="./user/assets/images/avatar-01.jpg" alt style={{ maxWidth: 46, borderRadius: '50%', float: 'left' }} />
                </div>
                <span><i className="fa fa-check" /> Kengan Omeg</span>
                <h4>Just Talking With Fans</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="./user/assets/images/stream-06.jpg" alt />
                <div className="hover-effect">
                  <div className="content">
                    <div className="live">
                      <a href="#">Live</a>
                    </div>
                    <ul>
                      <li><a href="#"><i className="fa fa-eye" /> 1.2K</a></li>
                      <li><a href="#"><i className="fa fa-gamepad" /> CS-GO</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="down-content">
                <div className="avatar">
                  <img src="./user/assets/images/avatar-02.jpg" alt style={{ maxWidth: 46, borderRadius: '50%', float: 'left' }} />
                </div>
                <span><i className="fa fa-check" /> LahutaMalc</span>
                <h4>CS-GO 36 Hours Live Stream</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="./user/assets/images/stream-07.jpg" alt />
                <div className="hover-effect">
                  <div className="content">
                    <div className="live">
                      <a href="#">Live</a>
                    </div>
                    <ul>
                      <li><a href="#"><i className="fa fa-eye" /> 1.2K</a></li>
                      <li><a href="#"><i className="fa fa-gamepad" /> CS-GO</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="down-content">
                <div className="avatar">
                  <img src="./user/assets/images/avatar-03.jpg" alt style={{ maxWidth: 46, borderRadius: '50%', float: 'left' }} />
                </div>
                <span><i className="fa fa-check" /> Areluwa</span>
                <h4>Maybe Nathej Allnight Chillin'</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="./user/assets/images/stream-08.jpg" alt />
                <div className="hover-effect">
                  <div className="content">
                    <div className="live">
                      <a href="#">Live</a>
                    </div>
                    <ul>
                      <li><a href="#"><i className="fa fa-eye" /> 1.2K</a></li>
                      <li><a href="#"><i className="fa fa-gamepad" /> CS-GO</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="down-content">
                <div className="avatar">
                  <img src="./user/assets/images/avatar-04.jpg" alt style={{ maxWidth: 46, borderRadius: '50%', float: 'left' }} />
                </div>
                <span><i className="fa fa-check" /> NewGangTeam</span>
                <h4>Live Streaming Till Morning</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="./user/assets/images/stream-07.jpg" alt />
                <div className="hover-effect">
                  <div className="content">
                    <div className="live">
                      <a href="#">Live</a>
                    </div>
                    <ul>
                      <li><a href="#"><i className="fa fa-eye" /> 1.2K</a></li>
                      <li><a href="#"><i className="fa fa-gamepad" /> CS-GO</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="down-content">
                <div className="avatar">
                  <img src="./user/assets/images/avatar-01.jpg" alt style={{ maxWidth: 46, borderRadius: '50%', float: 'left' }} />
                </div>
                <span><i className="fa fa-check" /> Kengan Omeg</span>
                <h4>Just Talking With Fans</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="./user/assets/images/stream-08.jpg" alt />
                <div className="hover-effect">
                  <div className="content">
                    <div className="live">
                      <a href="#">Live</a>
                    </div>
                    <ul>
                      <li><a href="#"><i className="fa fa-eye" /> 1.2K</a></li>
                      <li><a href="#"><i className="fa fa-gamepad" /> CS-GO</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="down-content">
                <div className="avatar">
                  <img src="./user/assets/images/avatar-02.jpg" alt style={{ maxWidth: 46, borderRadius: '50%', float: 'left' }} />
                </div>
                <span><i className="fa fa-check" /> LahutaMalc</span>
                <h4>CS-GO 36 Hours Live Stream</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="./user/assets/images/stream-05.jpg" alt />
                <div className="hover-effect">
                  <div className="content">
                    <div className="live">
                      <a href="#">Live</a>
                    </div>
                    <ul>
                      <li><a href="#"><i className="fa fa-eye" /> 1.2K</a></li>
                      <li><a href="#"><i className="fa fa-gamepad" /> CS-GO</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="down-content">
                <div className="avatar">
                  <img src="./user/assets/images/avatar-03.jpg" alt style={{ maxWidth: 46, borderRadius: '50%', float: 'left' }} />
                </div>
                <span><i className="fa fa-check" /> Areluwa</span>
                <h4>Maybe Nathej Allnight Chillin'</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="./user/assets/images/stream-06.jpg" alt />
                <div className="hover-effect">
                  <div className="content">
                    <div className="live">
                      <a href="#">Live</a>
                    </div>
                    <ul>
                      <li><a href="#"><i className="fa fa-eye" /> 1.2K</a></li>
                      <li><a href="#"><i className="fa fa-gamepad" /> CS-GO</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="down-content">
                <div className="avatar">
                  <img src="./user/assets/images/avatar-04.jpg" alt style={{ maxWidth: 46, borderRadius: '50%', float: 'left' }} />
                </div>
                <span><i className="fa fa-check" /> NewGangTeam</span>
                <h4>Live Streaming Till Morning</h4>
              </div>
            </div>
          </div>
        </OwlCarousel>
        <div className="col-lg-12">
          <div className="main-button">
            <a href="streams.html">Load More Streams</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default LiveStreamStart