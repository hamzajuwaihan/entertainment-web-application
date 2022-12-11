import './post.css';

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";



function PostComment() {
  const [post, setPost] = useState("");
  const [hasError, setErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  
  const formHandler = (e) => {
    e.preventDefault();

   if(post===""){
    setErrors(true);
    setErrorMessage("Please fill all fields");
   }else{
    dispatch(
      
    );
   }
  };
    return (
        <>
 


<div className="container bootstrap snippets bootdey">
  <div className="row">
    <div className="col-md-12">
      <div className="blog-comment">
        {/* <h3 className="text-success">Comments</h3> */}
         
        <div>
  <form className="card card-sm" onSubmit={formHandler}>
    <div className="card-body row no-gutters align-items-center">
      <div className="col-auto">
      
        <i class="fa fa-comment" aria-hidden="true" style={{fontSize:"1.8rem" ,color:"#198754"}}></i>

      </div>
      {/*end of col*/}
      <div className="col">
        <input className="form-control form-control-lg form-control-borderless"    value={post}
            onChange={(e) => setPost(e.target.value)} type="text" placeholder="" />
      </div>
      {/*end of col*/}
      <div className="col-auto">
        <button className="btn btn-lg btn-success" type="submit">Comment</button>
      </div>
      {/*end of col*/}
    </div>
  </form>
</div><hr /> 
        <ul className="comments">
    
          <li className="clearfix">
            <img src="https://bootdey.com/img/Content/user_2.jpg" className="avatar" alt />
            <div className="post-comments">
              <p className="meta">Dec 19, 2014 <a href="#">JohnDoe</a> says : <i className="pull-right"><a href="#"><small>Reply</small></a></i></p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam a sapien odio, sit amet
              </p>
            </div>
            <ul className="comments">
              <li className="clearfix">
                <img src="https://bootdey.com/img/Content/user_3.jpg" className="avatar" alt />
                <div className="post-comments">
                  <p className="meta">Dec 20, 2014 <a href="#">JohnDoe</a> says : <i className="pull-right"><a href="#"><small>Reply</small></a></i></p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam a sapien odio, sit amet
                  </p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>




        </>
    )}
        export default PostComment