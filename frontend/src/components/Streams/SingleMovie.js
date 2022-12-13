
import { Link } from 'react-router-dom';


function SingleMovie({ id, title, rating, image , release_date}) {

var release = release_date.split('-')

  return (
    <>

      <div className="col-lg-3 col-sm-6 mt-4" >
        <div className="item">
          <div className="thumb">
            <img src={`http://localhost:8000/images/${image}`} alt ="" style={{height:"300px"}} />
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
          <div >
            {/* <div className="avatar">
              <img src="./user/assets/images/avatar-01.jpg" alt style={{ maxWidth: 66, borderRadius: '50%', float: 'left' }} />
            </div> */} <h5>{title}</h5>
            <div className="row">
              <div className='col-8'>
            <span style={{color:'white'}} ><i class="fa fa-star" aria-hidden="true" style={{color:'yellow',backgroundColor:'transparent',fontSize:'1rem'}}/> 
            {rating}</span> </div>
            <div className='col-4'>
            <h6 style={{fontSize:'.9rem',color:'white'}}> <i class="fa fa-clock"style={{color:'#c04f78'}}/>  {release[0]}</h6>
           </div> </div>
          </div>
        </div>
      </div>



    </>

  )
}

export default SingleMovie