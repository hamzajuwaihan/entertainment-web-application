
import { Link } from 'react-router-dom';


function SingleMovieTest({ id, title, rating, image , release_date}) {

var release = release_date.split('-')

  return (
    <>

      <div className="col-lg-3 col-sm-6" >
        <div className="item">
          <div className="thumb">
            <img src="./user/assets/images/stream-05.jpg" alt  />
            <div className="hover-effect">
              <div className="content">
                <ul>
                  <li >
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
              <img src="./user/assets/images/avatar-01.jpg" alt style={{ maxWidth: 66, borderRadius: '50%', float: 'left' }} />
            </div>
            <span ><i class="fa fa-star" aria-hidden="true" style={{color:'yellow',backgroundColor:'transparent',fontSize:'1rem'}}/> {rating}</span> 
            <h4>{title}</h4>
            <h6 style={{fontSize:'.9rem',color:'grey', marginLeft:'13vw'}}> <i class="fa fa-clock"style={{color:'#c04f78'}}/>  {release[0]}</h6>
            
          </div>
        </div>
      </div>



    </>

  )
}

export default SingleMovieTest