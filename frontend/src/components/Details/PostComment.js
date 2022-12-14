import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPost from './PostRelatedComponents/AddPost';




function PostComment() {

  return (
    <>

      {JSON.parse(sessionStorage.getItem('user')) === null ? null : <AddPost />}
      
    </>
  )
}
export default PostComment