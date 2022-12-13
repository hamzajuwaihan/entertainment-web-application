import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './owl.css';
import { useDispatch, useSelector } from 'react-redux';
import { latestMovie } from '../../redux/movies/moviesActions';
import { Link } from 'react-router-dom';
function Featured() {
  const movies = useSelector(state => state.movies);
  const currentMovies = movies.movies.slice(0, 10);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(latestMovie());
  }, []);
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="featured-games header-text">
          <div className="heading-section">
            <h4><em>Latest </em> Movies</h4>
          </div>
          <div className="owl-features owl-carousel">
            <OwlCarousel items={4}
              className="owl-theme"
              loop
              autoplay
              nav
              margin={25} >
              
              {currentMovies.length > 0
                ? currentMovies.map((movie) => {

                  var year=movie.release_date.split("-")
                    return (
                      <div className="item">
                      <div className="thumb">
                        <img src={`http://localhost:8000/images/${movie.image}`}  style={{ height:"350px"}}/>
                        <div className="hover-effect">
                          <h6>  
                          <Link to={`/movie/${movie.id}`}><i className="fa fa-eye" />
                          Show
                        </Link></h6>
                        </div>
             
                      </div>

                      <h4 className='col-6 px-1'>{movie.title}<br /><span></span></h4>
                      <ul className=' px-4'>
                        <li><i className="fa fa-star" /> {movie.rating}</li>
                        <li><i className="fa fa-clock" /> {year[0]}</li>
                      </ul>
                    </div>
                    );
                  })
                : null}
             
             

              </OwlCarousel>
          </div>
        </div>
      </div>
    {/** 
      <div className="col-lg-4">
        <div className="top-streamers">
          <div className="heading-section">
            <h4><em>Top</em> Streamers</h4>
          </div>
          <ul>
            <li>
              <span>01</span>
              <img src="./user/assets/images/avatar-01.jpg" style={{ maxWidth: 46, borderRadius: '50%', marginRight: 15 }} />
              <h6><i className="fa fa-check" /> LahutaM</h6>
              <div className="main-button">
                <a href="#">Follow</a>
              </div>
            </li>
            <li>
              <span>02</span>
              <img src="./user/assets/images/avatar-02.jpg" style={{ maxWidth: 46, borderRadius: '50%', marginRight: 15 }} />
              <h6><i className="fa fa-check" /> Kengan</h6>
              <div className="main-button">
                <a href="#">Follow</a>
              </div>
            </li>
            <li>
              <span>03</span>
              <img src="./user/assets/images/avatar-03.jpg" style={{ maxWidth: 46, borderRadius: '50%', marginRight: 15 }} />
              <h6><i className="fa fa-check" /> Areluwa</h6>
              <div className="main-button">
                <a href="#">Follow</a>
              </div>
            </li>
            <li>
              <span>04</span>
              <img src="./user/assets/images/avatar-04.jpg" style={{ maxWidth: 46, borderRadius: '50%', marginRight: 15 }} />
              <h6><i className="fa fa-check" /> Omeg</h6>
              <div className="main-button">
                <a href="#">Follow</a>
              </div>
            </li>
            <li>
              <span>05</span>
              <img src="./user/assets/images/avatar-01.jpg" style={{ maxWidth: 46, borderRadius: '50%', marginRight: 15 }} />
              <h6><i className="fa fa-check" /> GangTeam</h6>
              <div className="main-button">
                <a href="#">Follow</a>
              </div>
            </li>
          </ul>
        </div>
      </div>*/}
    </div>

  )
}

export default Featured