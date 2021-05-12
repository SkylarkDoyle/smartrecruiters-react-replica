import React from "react"
import "./setting/settings.css"
import logo from "./img/smartrecruiters_bulb.png"
import textLogo from "./img/smartrecruiters_medium.png"
import bell from "./img/bell.png"
import avatar from "./img/avatar-placeholder.png"
import planetLogo from "./img/planet.png"
import lock from "./img/lock.png"
import cookie from "./img/cookie.png"
import upload from "./img/upload-icon.png"
import personRemove from "./img/person-remove.png"
import Case from "./img/case.png"
import homeIcon from "./img/home-icon.png"
import searchIcon from "./img/search-icon.png"
import workIcon from "./img/work-icon.png"
import profIcon from "./img/profile-icon.png"
import dArr from "./img/down-arrow.png"
import uArr from "./img/up-arrow.png"
import {Link} from "react-router-dom"

function Setting(){
       //code for the bell link
var notificationDiv = false;

function bellToggle(){
var bell = document.querySelector(".bellImg");
var notiDiv = document.querySelector(".notification");

if (notificationDiv === false) {
bell.addEventListener("click", function(){
    notiDiv.style.display = "block";
})
notificationDiv = true;
}

else if (notificationDiv === true) {
bell.addEventListener("click", function(){
    notiDiv.style.display = "none";
})
notificationDiv = false;
}

};


//code for user-profile toggling
var settingToggled = false;

function settingToggle(){
var setting = document.querySelector(".setting-header-user");
var displaysetting = document.querySelector(".user-setting");
var arr = document.querySelector(".d-arr");


if (settingToggled === false) {
setting.addEventListener("click", function(){
	//change down-arrow souce to up-arrow
    displaysetting.style.display = "block";
    arr.src = uArr;
})
settingToggled = true;
}

else if (settingToggled === true) {
setting.addEventListener("click", function(){
    displaysetting.style.display = "none";
    arr.src = dArr;
})
settingToggled = false;
}

};

   return (
       <div>
           <div className="setting-wrapper">   
    	<div className="setting-header">
        <Link to="/home" className="setting-logo">
    			<img src={logo} className="icon-logo" alt="logo" /> 
    			<img src={textLogo} className="text-logo"  alt="text-logo" /></Link>
          <ul className="setting-links">
              <li><Link to="/search">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/job">My Jobs</Link></li>
          </ul>
    		<div className="setting-nav-links">
                 <img src={bell} className="bellImg" onClick={bellToggle} alt="bell" />
                 <div className="notification">
                   <div className="bell-logo"></div>
                      <p className="notification-header">No notifications</p>
                      <p className="notification-text">We'll notify you when a matching job arrives!</p>
                 </div>

            <div className="setting-header-user" onClick={settingToggle}>
                 <img src={avatar} alt="avatar" />
                 <p className="username">Olalekan Adebari</p>
                 <img src={dArr} className="d-arr" alt="dArr" />
                 <div className="user-setting">
                   <h4>Olalekan Adebari</h4>
                   <p>adebari.olalekan.oluwaseun@gmail.com</p>
                   <Link to="/profile" className="user-smart-link">My SmartProfile</Link>
                   <ul>
                     <li><a href="#smartjob">Smart Job Search <span>NEW</span></a></li>
                     <li className="hidden"><Link to="/search">Search</Link></li>
                     <li className="hidden"><Link to="/job">My Jobs</Link></li>
                     <li><a href="#job">Jobseeker Guide</a></li>
                     <li><Link to="/setting">Settings</Link></li>
                     <li><Link to="/signin">Logout</Link></li>
                   </ul>
                 </div>
            </div>
    		</div>
    	</div>
    </div>

  <div className="settings-wrapper">
    
<div className="pref">
   <h2>Preferences</h2>
   <div className="pref-box">
      <img src={planetLogo} alt="planet" />
      <p>Change language</p>
      <form className="pref-box-form">
        <select>
    <option>English</option>
    <option>Afrikaans</option>  
    <option>Bahasa Indonesia</option>
    <option>Čeština</option>
    <option>Dansk</option>
    <option>Deutsch</option>
    <option>Español</option>
    <option>Español(Mexico)</option>
    <option>Français</option>
    <option>Français (Canada)</option>
    <option>Italiano</option>
    <option>Lietuvių</option>
    <option>Hrvatski</option>
    <option>Magyar</option>
    <option>Mongolian</option>
    <option>Nederlands</option>
    <option>Norsk (Bokmål)</option>
    <option>Polski</option>
    <option>Portuguese</option>
    <option>Portuguese (Brazil)</option>
    <option>Romana</option>
    <option>Slovenčina</option>
    <option>Srpski</option>
    <option>Suomi</option>
    <option>Svenska</option>
    <option>Tiếng Việt</option>
    <option>Türkçe</option>
    <option>Русский</option>
    <option>Български</option>
    <option>Български</option>
    <option>العربية‬‎</option>
    <option>עברית</option>
    <option>日本語</option>
    <option>中文 (简体)</option>
    <option>中文 (简体)</option>
    <option>ไทย</option>
         </select>
     </form>
   </div>
    
</div>

  <div className="privacy">
      <h2>Privacy</h2>

 <div className="change-pwd-box">
  <img src={lock} alt="lock" />
  <p>Change my password</p>
</div>

      <div className="cookies">
      <img src={cookie} alt="cookie" />
      <p>Cookies settings</p>
    </div>

   <div className="export">
     <img src={upload} alt="upload" />
     <p>Export my SmartProfile data</p>
   </div>

  <div className="delete">
    <img src={personRemove} alt="person-remove" />
    <p>Delete my SmartRecruiters account</p>
    <span>Logout</span>
  </div>

   <div className="review">
    <img src={Case} alt="case" />
    <p>Review my Archived Jobs</p>
  </div>

  </div>

  </div>

<nav className="bottom-nav">

    <div className="home">
      <img src={homeIcon} alt="home" />
      <Link to="/hhome">Home</Link>
    </div>

<div className="search">
  <img src={searchIcon} alt="search" />
  <Link to="/search">Search</Link>
</div>

 <div className="job">
  <img src={workIcon} alt="work-icon" />
  <Link to="/job">My Jobs</Link>
</div>

  <div className="s-prof">
  <img src={profIcon} alt="prof" />
  <Link to="/profile">SmartProfile</Link>
  </div>

</nav>

       </div>
   )
}





export default Setting