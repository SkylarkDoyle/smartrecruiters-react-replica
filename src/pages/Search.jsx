import React from "react"
import "./search/search.css"
import logo from "./img/smartrecruiters_bulb.png"
import textLogo from "./img/smartrecruiters_medium.png"
import bell from "./img/bell.png"
import avatar from "./img/avatar-placeholder.png"
import homeIcon from "./img/home-icon.png"
import searchIcon from "./img/search-icon.png"
import workIcon from "./img/work-icon.png"
import profIcon from "./img/profile-icon.png"
import dArr from "./img/down-arrow.png"
import uArr from "./img/up-arrow.png"
import {Link} from "react-router-dom"

function Search(){
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
var searchToggled = false;

function searchToggle(){
var search = document.querySelector(".search-header-user");
var displaysearch = document.querySelector(".user-search");
var arr = document.querySelector(".d-arr");


if (searchToggled === false) {
search.addEventListener("click", function(){
	//change down-arrow souce to up-arrow
    displaysearch.style.display = "block";
    arr.src = uArr;
})
searchToggled = true;
}

else if (searchToggled === true) {
search.addEventListener("click", function(){
    displaysearch.style.display = "none";
    arr.src = dArr;
})
searchToggled = false;
}

};


var listOfEmpDis = false;

function listOfEmp(){
	var tofClick = document.querySelector(".tof");
	var lof = document.querySelector(".list-of-emp");

	if (listOfEmpDis === false) {
       tofClick.addEventListener("click", function(){
       	  lof.style.display = "block";
       });
       listOfEmpDis = true;
 	}
 	else if(listOfEmpDis === true){
 		tofClick.addEventListener("click", function(){
 			lof.style.display = "none";
 		});
 		listOfEmpDis = false;
 	}
}


   return( <div>
    <div className="sticky">
    <a href="#feed">Feedback</a>
</div>


  <div className="search-wrapper">
 
    <div className="search-header">
      <Link to="/profile" className="search-logo">
        <img src={logo} className="icon-logo" alt="logo" /> 
        <img src={textLogo} className="text-logo" alt="text-logo" /></Link>
        <ul className="search-links">
            <li><Link to="/profile">Home</Link></li>
            <li><Link to="/search" className="active-page">Search</Link></li>
            <li><Link to="/job">My Jobs</Link></li>
        </ul>
      <div className="search-nav-links">
               <img src={bell} className="bellImg" onClick={bellToggle} alt="bell"/>
               <div className="notification">
                 <div className="bell-logo"></div>
                    <p className="notification-header">No notifications</p>
                    <p className="notification-text">We'll notify you when a matching job arrives!</p>
               </div>

          <div className="search-header-user" onClick={searchToggle}>
               <img src={avatar} alt="avatar" />
               <p className="username">Olalekan Adebari</p>
               <img src={dArr} className="d-arr" alt="d-arr" />
               <div className="user-search">
                 <h4>Olalekan Adebari</h4>
                 <p>adebari.olalekan.oluwaseun@gmail.com</p>
                 <Link to="/profile" className="user-smart-link">My SmartProfile</Link>
                 <ul>
                   <li><a href="#job">Smart Job Search <span>NEW</span></a></li>
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

       <div className="search-bar-container">
         <form className="search-bar">
             <input type="text" name="search" placeholder="Search" />
             <input type="text" name="loc" placeholder="Location" />
             <input type="button" name="tof" value="Type of employment" onClick={listOfEmp} className="tof" />
             <ul className="list-of-emp">
               <li>Full-time</li>
               <li>Part-time</li>
               <li>Intern</li>
               <li>Contract</li>
             </ul>
         </form>
            <p className="search-bar-btn">Find my next job</p>
       </div>
  <div className="smart-profile">
    <div className="smart-profile-text">
      <p>Keep your SmartProfile up to date to get the best job recommendations.</p>
    <h4>Your SmartProfile is 45% complete</h4>    
    <div className="progress">
        <div className="completion remain"></div>
    </div>
       <span>45%</span>
        </div>  
        <div className="smart-profile-btn">
        <Link to="/profile">Update my SmartProfile</Link>
        </div>
    
</div>

      </div>
  
<nav className="bottom-nav">

  <div className="home">
    <img src={homeIcon} alt="home-icon" />
     <Link to="/home">Home</Link>
  </div>

<div className="search">
<img src={searchIcon} alt="search-icon" />
<Link to="/search">Search</Link>
</div>

<div className="job">
<img src={workIcon} alt="work-icon" />
<Link to="/job">My Jobs</Link>
</div>

<div className="s-prof active-page">
<img src={profIcon} alt="prof-icon" />
<Link to="/profile">SmartProfile</Link>
</div>

</nav>
</div>
   )
}








export default Search