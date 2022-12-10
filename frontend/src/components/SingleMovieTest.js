
import { Link } from 'react-router-dom';


function SingleMovieTest({ id, title, rating, image }) {




  return (
    <>

      <div className="col-lg-3 col-sm-6">
        <div className="item">
          <div className="thumb">
            <img src="./user/assets/images/stream-05.jpg" alt />
            <div className="hover-effect">
              <div className="content">
                <ul>
                  <li>
                    <Link to={`/movie/${id}`}><i className="fa fa-eye" />
                      Show
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="down-content">
            <div className="avatar">
              <img src="./user/assets/images/avatar-01.jpg" alt style={{ maxWidth: 46, borderRadius: '50%', float: 'left' }} />
            </div>
            <span><i className="fa fa-check" /> {rating}</span>
            <h4>{title}</h4>
          </div>
        </div>
      </div>



    </>

  )
}

export default SingleMovieTest