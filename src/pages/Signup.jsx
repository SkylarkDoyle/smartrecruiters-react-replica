import React from "react"
import landingAuth from "./img/landing-auth.png"
import "./signup/sign-up.css"
import logo from "./img/smartrecruiters_medium.png"
import {Link} from "react-router-dom"
function Signup(){

 // <!--  Script for input bg-color and outline --> 
 function firstNameTouched(){
    var firstName = document.querySelector(".first");
        firstName.style.borderColor = "#b83030";
        firstName.style.backgroundColor = "#fff6e1";

}
 function lastNameTouched(){
 var lastName = document.querySelector(".last");
   lastName.style.borderColor = "#b83030";
   lastName.style.backgroundColor = "#fff6e1";

}
 function emailTouched(){
 var email = document.querySelector(".email");
   email.style.borderColor = "#b83030";
   email.style.backgroundColor = "#fff6e1";

}
 function pwdTouched(){
 var pwd = document.querySelector(".pwd");
   pwd.style.borderColor = "#b83030";
   pwd.style.backgroundColor = "#fff6e1";

}

//checks if firstname, lastname has a certain text value
function validation(){
var firstName = document.querySelector(".first").value;
var lastName = document.querySelector(".last").value;
var signupForm = document.querySelector(".signup-form");

if (firstName.length === 7 || lastName.length === 8) {
   signupForm.action = '/home';
   return true;
}
else{
 signupForm.action = '/signup';
 return false;

}

}


//for password validation
function pwdVal(){
var pwd = document.querySelector(".pwd").value;
var pwdReq = document.querySelector(".pwd-req");

if (pwd) {
    pwdReq.style.display = "block";
}else{
   pwdReq.style.display = "none";
}
}

    return(
 <div className="signup-wrapper">
    <div className="signup-header">
    <img src={landingAuth} alt="lnd-auth" />
         <h1>Welcome to SmartRecruiters!</h1>
    <div className="signup-header-brand">
      <p>We’ve simplified your job search! With your account, you can:</p>
      <ul>
        <li><strong> TRACK</strong> your job applications</li>
        <li><strong> COMMUNICATE </strong>directly with the hiring team  </li>
        <li> <strong>UPDATE</strong> your SmartProfile to put your best foot forward</li>
        <li><strong>CONTROL </strong>your data and privacy settings</li>
      </ul>
    </div>
    </div>
    <form action="" className="signup-form" onSubmit={validation}>
          	<h1>Get Started</h1>
          	<label for="first">First name</label>
          	<input type="text" name="first" onClick={firstNameTouched} className="first" />
            <p className="error-msg">Pls Type Your First Name</p>
          	<label for="last">Last name</label>
          	<input type="text" name="last"  onClick={lastNameTouched} className="last" />
            <p className="error-msg">Pls Type Your Last Name</p>
          	<label for="first">Email</label>
          	<input type="email" name="email"  onClick={emailTouched} className="email" />
          	<label for="pwd">Password</label>
          	<input type="password" name="pwd"  onClick={pwdTouched} className="pwd" onInput={pwdVal} />
            <div className="pwd-req">
               <p>Your password should meet the following requirements:</p>
               <p><span></span>Should be at least 8 characters long</p>
               <p><span></span>Should contain uppercase letters</p>
               <p><span></span>Should contain lowercase letters</p>
               <p><span></span>Should contain a number</p>
            </div>
          	<div className="agreement">
          		<input type="checkbox" className="agreement-checkbox"/>
          		<p className="agreement-text">
          			By checking this box you will declare that you read and understand the 
          			<a href="#sm">SmartRecruiters Privacy Policy</a> 
          			and 
          			<a href="#sm"> SmartRecruiters Terms of Use</a>
          			<span>*</span>
          		</p>
          	</div>
          	<button>Get started now</button>
           <Link to="/signin" className="sign-in">Sign in</Link>
          </form>
      <img src={logo} className="text-logo" alt="text-logo"/>
        
        </div>
       
    )
}

export default Signup