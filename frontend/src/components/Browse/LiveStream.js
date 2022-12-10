import React from 'react'

function LiveStream() {
  return (
    <>
      <div className="live-stream">
        <div className="col-lg-12">
          <div className="heading-section">
            <h4><em>Most Popular</em> Live Stream</h4>
          </div>
        </div>
        <div className="row">

            <div className="col-lg-3 col-sm-6">

              <div className="item">
                <div className="thumb">
                  <img src="./user/assets/images/stream-01.jpg" />
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
                    <img src="./user/assets/images/avatar-01.jpg" style={{ maxWidth: 46, borderRadius: '50%', float: 'left' }} />
                  </div>
                  <span><i className="fa fa-check" /> KenganC</span>
                  <h4>Just Talking With Fans</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <img src="./user/assets/images/stream-02.jpg" />
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
                    <img src="./user/assets/images/avatar-02.jpg" style={{ maxWidth: 46, borderRadius: '50%', float: 'left' }} />
                  </div>
                  <span><i className="fa fa-check" /> LunaMa</span>
                  <h4>CS-GO 36 Hours Live Stream</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <img src="./user/assets/images/stream-03.jpg" />
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
                    <img src="./user/./user//images/avatar-03.jpg" style={{ maxWidth: 46, borderRadius: '50%', float: 'left' }} />
                  </div>
                  <span><i className="fa fa-check" /> Areluwa</span>
                  <h4>Maybe Nathej Allnight Chillin'</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="item">
                <div className="thumb">
                  <img src="./user/assets/images/stream-04.jpg" />
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
                    <img src="./user/assets/images/avatar-04.jpg" style={{ maxWidth: 46, borderRadius: '50%', float: 'left' }} />
                  </div>
                  <span><i className="fa fa-check" /> GangTm</span>
                  <h4>Live Streaming Till Morning</h4>
                </div>
              </div>
            </div>

          <div className="col-lg-12">
            <div className="main-button">
              <a href="streams.html">Discover All Streams</a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default LiveStream