import { Link } from 'react-router-dom';

import React from 'react'

function TopRatedMovie({ id, title, rating, image , release_date,genre}) {
   var release = release_date.split('-')
    return (
        <>
            
                    
                            <div className="col-lg-4 col-sm-6">
                                <div className="item" >
                                   <Link to={`/movie/${id}`} > <img style={{height:"300px"}}  src={`http://localhost:8000/images/${image}`} alt=""/></Link>
                                   <h4>{title}<br/><span>{genre}</span></h4>
                                        <ul>
                                            <li><i className="fa fa-star"></i> {rating}</li>
                                            <li><i className="fa fa-calender"></i>{release_date}</li>
 
                                        </ul>
                                </div>
                            </div>
                           

           
           
        </>
    )
}

export default TopRatedMovie

