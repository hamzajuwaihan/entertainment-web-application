import '../registerLogin.css';
import emailjs from "@emailjs/browser";
import React, { useRef} from "react";
// import styled from "styled-components";
import swal from 'sweetalert';
// npm i @emailjs/browser

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();
    
    emailjs.sendForm('service_nl7ykri', 'template_ahvjamf', form.current, 'XXnL6qFANgzlbeZ46')
      .then((result) => {
        console.log(result.text);
        swal({
          title: "Thanks",
          text: "Your message has been sent",
          icon: "success",
          button: "ok",
        });
        
      }, (error) => {
        console.log(error.text);
        swal("Oops...", "Something went wrong!", "error");
      });
      e.target.reset();
      
  };




  return (
    <>

      <div class="container">
        <div class="row">
          <div class="col col-sm-6 col-md-6 lg-6">

            <img alt="" src="./user/assets/images/contact.png" color="" style={{height:"400px", width:"450px"}} ></img>
            <div color="mt-2">
              <h2>You tell us.</h2>
              <br></br>
              <h5> info@filmfeed.com</h5>
              <br></br>
              <h5> need Help? Call Us. +962777777777</h5>
            </div>

          </div>
          <div class="col-sm-6 col-md-6 mainBox px-5">
            
              <h1 class="text-center mt-5">contact</h1>
              <form ref={form} onSubmit={sendEmail} class="mt-3 labelInputs">
                <label class="form-label">Name</label>
                <input type="text" name="user_name" class="form-control"/>
                
                <br></br>
                <label class="form-label">Email</label>
                <input type="email" name="user_email" class="form-control"  />
                
                <br></br>
                <label class="form-label">Message</label>
                <textarea name="message" class="form-control"  />
               
                <br></br>
                <br></br>
                <input type="submit" value="Send" class="mb-5  btn btn-light col-12 submitBut" />
              </form>
           
          </div>
          <br></br>
        </div>
      </div>








    </>
  );
};
export default Contact;

