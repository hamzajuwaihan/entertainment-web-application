import React from 'react'
import AddToFavourite from './Favourite/AddToFavourite'

function DetailsStart({title ,rating,overview,genre,runtime,popularity,release_date}) {
  return (
    <>
    <div className="game-details">
  <div className="row">
    <div className="col-lg-12">
      <h2 className='heading-section'><span style={{ color:'#e75e8d' }}><em>{title}</em></span> Details</h2>
    </div>
    <div className="col-lg-12">
      <div className="content">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-info h-100 " >
              <div className="left mt-3">
                <h4>{title}</h4>
                <span>{genre}</span><AddToFavourite/>
              </div>
              <ul className='mt-3'>
                {/* <li><i className="fa fa-heart" /> Add To Favourite </li><br/> */}
                <li><i className="fa fa-star" />Rating : {rating}</li><br/>
                <li><i className="fa fa-clock" /> Runtime : {runtime}min</li><br/>
                <li><i className="fa fa-server" /> Popularity : {popularity}</li><br/>
                <li><i className="fa fa-gamepad" /> Release Date : {release_date}</li>
                  
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-info h-100">
              <h3>overview</h3>
              <p>{overview}</p>
            
              {/* <ul>
                <li><i className="fa fa-star" /> 4.8</li>
                <li><i className="fa fa-download" /> 2.3M</li>
                <li><i className="fa fa-server" /> 36GB</li>
                <li><i className="fa fa-gamepad" /> Action</li>
              </ul> */}
            </div>
          </div>
          {/* <div className="col-lg-4">
            <img src="/user/assets/images/details-01.jpg" alt style={{borderRadius: 23, marginBottom: 30}} />
          </div>
          <div className="col-lg-4">
            <img src="/user/assets/images/details-02.jpg" alt style={{borderRadius: 23, marginBottom: 30}} />
          </div>
          <div className="col-lg-4">
            <img src="/user/assets/images/details-03.jpg" alt style={{borderRadius: 23, marginBottom: 30}} />
          </div> */}
          {/* <div className="col-lg-12">
            <p>Cyborg Gaming is free HTML CSS website template provided by TemplateMo. This is Bootstrap v5.2.0 layout. You can make a <a href="https://paypal.me/templatemo" target="_blank">small contribution via PayPal</a> to info [at] templatemo.com and thank you for supporting. If you want to get the PSD source files, please contact us. Lorem ipsum dolor sit consectetur es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.</p>
          </div> */}
          {/* <div className="col-lg-12">
            <div className="main-border-button">
              <a href="#">Download Fortnite Now!</a>
            </div>
          </div> */}






        </div>
      </div>
    </div>
  </div>
</div>







    </>
  )
}

export default DetailsStart