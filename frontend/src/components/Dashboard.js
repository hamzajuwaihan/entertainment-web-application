import React from 'react'
import '../index.css';
import Profile from './stats/Profile';
import Stats from './stats/Stats';
import CommentBox from './Comments/CommentBox';
import MessageBox from './Messages/MessageBox'; 

function Dashboard() {
    return (
        <>
           <nav class="navbar navbar-expand-lg navbar-light bg-dark pl-auto">
           
  <a class="navbar-brand pl-5 text-white" href="#" >Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav flex-row d-none d-md-flex mx-auto">
      

      <li class="nav-item me-3 me-lg-1 mx-5">
        <a class="nav-link text-white" href="#">
          <span><i class="fas fa-flag fa-lg px-2" style={{color:'#f1c40f'}}></i>Posts </span>
        </a>
      </li>

      <li class="nav-item me-3 me-lg-1 mx-3">
        <a class="nav-link text-white" href="#">
          <span> <i class="fas fa-film fa-lg px-2" style={{color:'#a51890'}}></i> Movies</span>
        </a>
      </li>


      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link text-white" href="#">
          <span> <i class="fas fa-user-friends fa-lg px-2" style={{color:'#269ccf'}}></i>Users</span>
         
        </a>
      </li>
      
    </ul>
  </div>
  <button class="btn btn-danger" style={{float:'right',marginRight:'2vw'}}> logout</button>
</nav>

<div class="content-wrapper container">
<div class="page-content">
    <section class="row">
        <div class="col-12 col-lg-12 ">
            <div class="row mb-5">
              
                <Stats/>
                
            </div>
            
            <CommentBox/>
            </div>

            
            <div class="col-12 col-lg-3 ">

                <div class="mb-5"></div>
                <MessageBox/>
                </div>
            </section>
            </div>
            </div>
        </>

    )
}

export default Dashboard