import React from 'react'

function ProfileBanner() {
  return (
   <div className="row">
  <div className="col-lg-12">
    <div className="main-profile ">
      <div className="row">
        <div className="col-lg-4">
          <img src="./user/assets/images/profile.jpg" alt style={{borderRadius: 23}} />
        </div>
        <div className="col-lg-4 align-self-center">
          <div className="main-info header-text">
            <span>Offline</span>
            <h4>Alan Smithee</h4>
            <p>You Haven't Gone Live yet. Go Live By Touching The Button Below.</p>
            <div className="main-border-button">
              <a href="#">Start Live Stream</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 align-self-center">
          <ul>
            <li>Games Downloaded <span>3</span></li>
            <li>Friends Online <span>16</span></li>
            <li>Live Streams <span>None</span></li>
            <li>Clips <span>29</span></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="clips">
            <div className="row">
              <div className="col-lg-12">
                <div className="heading-section">
                  <h4><em>Your Favourite</em> Movies</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src="./user/assets/images/clip-01.jpg" alt style={{borderRadius: 23}} />
                    <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><i className="fa fa-play" /></a>
                  </div>
                  <div className="down-content">
                    <h4>First Clip</h4>
                    <span><i className="fa fa-eye" /> 250</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src="./user/assets/images/clip-02.jpg" alt style={{borderRadius: 23}} />
                    <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><i className="fa fa-play" /></a>
                  </div>
                  <div className="down-content">
                    <h4>Second Clip</h4>
                    <span><i className="fa fa-eye" /> 183</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src="./user/assets/images/clip-03.jpg" alt style={{borderRadius: 23}} />
                    <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><i className="fa fa-play" /></a>
                  </div>
                  <div className="down-content">
                    <h4>Third Clip</h4>
                    <span><i className="fa fa-eye" /> 141</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="item">
                  <div className="thumb">
                    <img src="./user/assets/images/clip-04.jpg" alt style={{borderRadius: 23}} />
                    <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><i className="fa fa-play" /></a>
                  </div>
                  <div className="down-content">
                    <h4>Fourth Clip</h4>
                    <span><i className="fa fa-eye" /> 91</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="main-button">
                  <a href="#">Load More Clips</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProfileBanner