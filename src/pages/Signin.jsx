import React from "react"
import landingAuth from "./img/landing-auth.png"
import "./signin/sign-in.css"
import logo from "./img/smartrecruiters_medium.png"
import In from "./img/linkedin.png"
import google from "./img/google.png"
import fb from "./img/facebook.png"
import {Link} from "react-router-dom"

function Signin(){
    //for email
    function email(){
 var email = document.querySelector(".email");
 var errorMsg = document.querySelector(".error-msg");

if(email.value === ""){
   email.addEventListener("click", function(){
    email.style.borderColor = "#b83030";
    email.style.backgroundColor = "#fff6e1";
   errorMsg.style.display = "block"
  });
   }
}

function pwd(){
//for password
  var pwd = document.querySelector(".pwd");
    pwd.addEventListener("click", function(){
    pwd.style.borderColor = "#b83030";
    pwd.style.backgroundColor = "#fff6e1";

    })
    }



//checks if firstname, lastname has a certain text value
function validation(){
var email = document.querySelector(".email").value;
var signinForm = document.querySelector(".signin-form");

if (email === "adebari.olalekan.oluwaseun@gmail.com") {
    signinForm.action = '/home';
    return true;
}
else{
  signinForm.action = '/signin';
  return false;

}

}
    return(
       <div className="signin-wrapper">
        <div className="signin-header">
        <img src={landingAuth} alt="lnd-auth" />
             <h1>Welcome to SmartRecruiters!</h1>
        <div className="signin-header-brand">
          <p>We’ve simplified your job search! With your account, you can:</p>
          <ul>
            <li><strong> TRACK</strong> your job applications</li>
            <li><strong> COMMUNICATE </strong>directly with the hiring team  </li>
            <li> <strong>UPDATE</strong> your SmartProfile to put your best foot forward</li>
            <li><strong>CONTROL </strong>your data and privacy settings</li>
          </ul>
        </div>
        </div>
 <form action="/home" className="signin-form" onSubmit={validation}>
     <h1>Sign In</h1>
   <p>Sign in with</p>
   <div className="sm-links">
        <a href="#linkedin"><img src={In} alt="likdin" /></a>
        <a href="#google"><img src={google} alt="google" /></a>
        <a href="#fb"><img src={fb} alt="fb" /></a>
   </div>
   <div className="divider">
      <span>or</span>
   </div>           
     <label for="first">Email</label>
     <input type="email" name="email" className="email" onClick={email}/>
   <p className="error-msg">Please Type Your Email!</p>
     <label for="pwd">Password</label>
     <input type="password" name="pwd" className="pwd"  onClick={pwd}/>

     <button>Sign in</button>
  <Link to="/signup">Get started now</Link>
  <Link to="forgotpwd" className="reset-pwd">Reset password</Link>
 </form>
<img src={logo} className="text-logo" alt="text-logo" />

<footer>
</footer>
</div>
    )
}

export default Signin