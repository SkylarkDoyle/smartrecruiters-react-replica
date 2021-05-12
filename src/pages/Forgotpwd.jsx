import React from "react"
import "./forgotpwd/forgot-pwd.css"
import landingAuth from "./img/landing-auth.png"
import {Link} from "react-router-dom"
import textlogo from "./img/smartrecruiters_medium.png"

function Forgotpwd(){
       
   function emailTouched(){
    var email = document.querySelector(".email");
      email.style.borderColor = "#b83030";
      email.style.backgroundColor = "#fff6e1";
  
   }
    return(
    <div className="forgotpwd-wrapper">
        <div className="forgotpwd-header">
        <img src={landingAuth} alt="lnd-auth" />
             <h1>Welcome to SmartRecruiters!</h1>
        <div className="forgotpwd-header-brand">
          <p>We’ve simplified your job search! With your account, you can:</p>
          <ul>
            <li><strong> TRACK</strong> your job applications</li>
            <li><strong> COMMUNICATE </strong>directly with the hiring team  </li>
            <li> <strong>UPDATE</strong> your SmartProfile to put your best foot forward</li>
            <li><strong>CONTROL </strong>your data and privacy settings</li>
          </ul>
        </div>
        </div>
 <form className="forgotpwd-form">
     <h1>Reset password</h1>
     <label for="first">Email</label>
     <input type="email" name="email" onTouchEnd={emailTouched} className="email" />
     <button>Submit</button>
  <p>Changed your mind?</p>
  <Link to="/signin">Sign in</Link>
 </form>

<img src={textlogo} className="text-logo" alt="txt-logo" />

<footer>
</footer>
  </div>
    )
}


export default Forgotpwd