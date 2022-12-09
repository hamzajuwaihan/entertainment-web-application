import React from 'react'

function Featured() {
  return (
    <>
      <div className="row">
        <div className="col-lg-8">
          <div className="featured-games header-text">
            <div className="heading-section">
              <h4><em>Featured</em> Games</h4>
            </div>
            <div className="owl-features owl-carousel">

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

            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="top-downloaded">
            <div className="heading-section">
              <h4><em>Top</em> Downloaded</h4>
            </div>
            <ul>
              <li>
                <img src="./user/assets/images/game-01.jpg" className="templatemo-item" />
                <h4>Fortnite</h4>
                <h6>Sandbox</h6>
                <span><i className="fa fa-star" style={{ color: 'yellow' }} /> 4.9</span>
                <span><i className="fa fa-download" style={{ color: '#ec6090' }} /> 2.2M</span>
                <div className="download">
                  <a href="#"><i className="fa fa-download" /></a>
                </div>
              </li>
              <li>
                <img src="./user/assets/images/game-02.jpg" className="templatemo-item" />
                <h4>CS-GO</h4>
                <h6>Legendary</h6>
                <span><i className="fa fa-star" style={{ color: 'yellow' }} /> 4.9</span>
                <span><i className="fa fa-download" style={{ color: '#ec6090' }} /> 2.2M</span>
                <div className="download">
                  <a href="#"><i className="fa fa-download" /></a>
                </div>
              </li>
              <li>
                <img src="./user/assets/images/game-03.jpg" className="templatemo-item" />
                <h4>PugG</h4>
                <h6>Battle Royale</h6>
                <span><i className="fa fa-star" style={{ color: 'yellow' }} /> 4.9</span>
                <span><i className="fa fa-download" style={{ color: '#ec6090' }} /> 2.2M</span>
                <div className="download">
                  <a href="#"><i className="fa fa-download" /></a>
                </div>
              </li>
            </ul>
            <div className="text-button">
              <a href="profile.html">View All Games</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured