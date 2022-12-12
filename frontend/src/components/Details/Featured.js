import React from 'react'

function Featured({ image, poster }) {
  return (
    <>

      <div className="row">
        <div className="col-lg-12">
          <div className="feature-banner header-text">
            <div className="row ">
              <div className="col-lg-4 ">
                <img src={`http://localhost:8000/images/${image}`} alt style={{ borderRadius: 23, height: "350px" }} />
              </div>
              <div className="col-lg-8"  >
                <div className="">
                  <img src={`http://localhost:8000/images/${poster}`} alt style={{ borderRadius: 23, height: "350px" }} />
                  <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank">
                    {/* <i className="fa fa-play" /> */}
                  </a>
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