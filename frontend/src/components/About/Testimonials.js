import React from "react";

function Testimonials() {
  return (
    <>
      <div className="live-stream">
        <div className="col-lg-12">
          <div className="heading-section">
            <h4>
              <em>Testimonials</em> Of Loyal Clients
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="./user/assets/images/user4.jpg" alt="" />
              </div>
              <div className="down-content" style={{textAlign:'center'}}>
                <span>
                  <i className="fa fa-check" /> KenganC
                </span>
                <h4 style={{textAlign:'left'}}>Good</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="./user/assets/images/user3.jpg" alt="" />
              </div>
              <div className="down-content" style={{textAlign:'center'}}>
                <span>
                  <i className="fa fa-check" /> Jack
                </span>
                <h4 style={{textAlign:'center'}}>Perfect</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="./user/assets/images/user2.jpg" alt="" />
              </div>
              <div className="down-content" style={{textAlign:'center'}}>
                <span>
                  <i className="fa fa-check" /> John
                </span>
                <h4 style={{textAlign:'left'}}>Amazing</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="item">
              <div className="thumb">
                <img src="./user/assets/images/user1.jpg" alt="" />
              </div>
              <div className="down-content" style={{textAlign:'center'}}>
                <span>
                  <i className="fa fa-check" /> Holand
                </span>
                <h4 style={{textAlign:'left'}}>Nice</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonials;
