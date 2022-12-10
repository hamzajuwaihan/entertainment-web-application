import React from 'react'

function Featured() {
  return (
    <>

      <div className="row">
        <div className="col-lg-12">
          <div className="feature-banner header-text">
            <div className="row">
              <div className="col-lg-4">
                <img src="/user/assets/images/feature-left.jpg" alt style={{ borderRadius: 23 }} />
              </div>
              <div className="col-lg-8">
                <div className="thumb">
                  <img src="/user/assets/images/feature-right.jpg" alt style={{ borderRadius: 23 }} />
                  <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><i className="fa fa-play" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Featured