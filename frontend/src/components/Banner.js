import React from 'react'

const Banner = () => {
    return (
        <>

            {/* <!-- ***** Banner Start ***** --> */}
            <div className="main-banner">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="header-text">
                            <h6>Welcome To FILMFEED</h6>
                            <h4><em>Browse</em> Our Popular Movies Here</h4>
                            <div className="main-button">
                                <a href="/movies">Browse Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Banner End ***** --> */}
        </>
    )
}

export default Banner