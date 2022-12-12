import './post.css';

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPost from './PostRelatedComponents/AddPost';



function PostComment() {
  
  return (
    <>


      {/* post  */}
      <div className="row d-flex justify-content-start mt-5">
        <div className="col-md-12 col-lg-10 col-xl-8 ">
          <div className="card bg-dark">
            <div className="card-body">
              <div className="d-flex flex-start align-items-center">

                <div>
                  <h6 className="fw-bold mb-1">Lily Coleman</h6>
                  <p className="text-muted small mb-0">
                    Shared publicly - Jan 2020
                  </p>
                </div>
              </div>

              <p className="mt-3 mb-4 pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip consequat.
              </p>

              {/* comments section */}
              <div className="card mb-3 bg-dark" >
                <div className="card-body">
                  <div className="d-flex flex-start">

                    <div className="w-100">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h6 className=" fw-bold mb-0">
                          lara_stewart
                          <div className="text-dark ms-2 text-white">Hmm, This poster looks cool</div>
                        </h6>
                        <p className="mb-0">2 days ago</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* form start */}
            <div className="card-footer py-3 border-0" >
              <div className="d-flex flex-start w-100">

                <div className="form-outline w-100">
                  <textarea className="form-control" id="textAreaExample" rows="4"
                    style={{ background: "#fff" }}></textarea>

                </div>
              </div>
              <div className="float-end mt-2 pt-1">
                <button type="button" className="btn btn-primary me-2 btn-sm">comment</button>
                <button type="button" className="btn btn-outline-primary btn-sm">Cancel</button>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* add post section*/}

      <AddPost />

    </>
  )
}
export default PostComment