import React from "react"
import "./home/home.css"
import logo from "./img/smartrecruiters_bulb.png"
import textLogo from "./img/smartrecruiters_medium.png"
import bell from "./img/bell.png"
import avatar from "./img/avatar-placeholder.png"
import dArr from "./img/down-arrow.png"
import uArr from "./img/up-arrow.png"
import evLogo from "./img/evolution.png"
import sigma from "./img/sigma.png"
import world from "./img/world.png"
import pGuide from "./img/proactive-guide.png"
import gSoon from "./img/graduating-soon.png"
import homeIcon from "./img/home-icon.png"
import searchIcon from "./img/search-icon.png"
import workIcon from "./img/work-icon.png"
import profIcon from "./img/profile-icon.png"
import {Link} from "react-router-dom"

function Home(){

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
var profileToggled = false;

function profileToggle(){
var profile = document.querySelector(".home-header-user");
var displayProfile = document.querySelector(".user-profile");
var arr = document.querySelector(".d-arr");


if (profileToggled === false) {
profile.addEventListener("click", function(){
    displayProfile.style.display = "block";
    arr.src = uArr;
})
profileToggled = true;
}

else if (profileToggled === true) {
profile.addEventListener("click", function(){
    displayProfile.style.display = "none";
    arr.src = dArr;
})
profileToggled = false;
}

};

    return(
      <div>
        <div className="sticky">
        <a href="#feedback">Feedback</a>
    </div>
  
    <div className="home-wrapper">
          <div className="home-header">
              <Link to="/home" className="home-logo">
                  <img src={logo} className="icon-logo" alt="logo" /> 
                  <img src={textLogo} className="text-logo" alt="txt-logo" /></Link>
            <ul className="home-links">
                <li><Link to="/home" className="active-page">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/job">My Jobs</Link></li>
            </ul>
              <div className="home-nav-links">
                   <img src={bell} className="bellImg" onClick={bellToggle} alt="bell-img" />
                   <div className="notification">
                    <div className="bell-logo"></div>
                        <p className="notification-header">No notifications</p>
                        <p className="notification-text">We'll notify you when a matching job arrives!</p>
                   </div>
  
              <div className="home-header-user" onClick={profileToggle}>
                   <img src={avatar} alt="avatar-plc" />
                   <p className="username">Olalekan Adebari</p>
                   <img src={dArr} className="d-arr" alt="d-arr" />
                   <div className="user-profile">
                     <h4>Olalekan Adebari</h4>
                     <p>adebari.olalekan.oluwaseun@gmail.com</p>
                     <Link to="/profile" className="user-smart-link">My SmartProfile</Link>
                     <ul>
                       <li><a href="#job">Smart Job Search <span>NEW</span></a></li>
                       <li className="hidden"><Link to="/search">Search</Link></li>
                       <li className="hidden"><Link to="/job">My Jobs</Link></li>
                       <li><Link to="/home">Jobseeker Guide</Link></li>
                       <li><Link to="/setting">Settings</Link></li>
                       <li><Link to="/signin">Logout</Link></li>
                     </ul>
                   </div>
              </div>
              </div>
          </div>
        
   <div className="smart-profile">
        <div className="smart-profile-text">
          <p>Keep your SmartProfile up to date so we can offer you the most relevant job opportunities.</p>
        <h4>Your SmartProfile is 45% complete</h4>    
        <div className="progress">
            <div className="completion remain"></div>
        </div>
           <span>45%</span>
            </div>  
            <div className="smart-profile-btn">
              <Link to="/profile">My SmartProfile</Link>
            </div>
        
   </div>
  
   <div className="job-application-link">
     <h2>My Job Applications</h2>      
       <a href="#seeall">See all</a>
    </div>
        <div className="ev-application">
             <img src={evLogo} alt="ev-logo" />
  
        <div className="ev-application-text">
              <a href="#review">
                <span>In review</span>
                 <p>Scala Engineer</p>
                 <div className="ev-loc">
                    <p className="ev">Evolution</p>
                    <p className="loc">Riga, Latvia</p>
                 </div>
              </a>
             </div>
        </div>   
  
        <div className="sigma-application">
             <img src={sigma} alt="sigma logo" />
             <div className="sigma-application-text">
              <a href="#new">
                <span>New</span>
                 <p>Middle/Senior Scala Developer (Online Shopping Platform)</p>
                 <div className="sig-loc">
                   <p className="sig">Sigma Software</p>
                   <p className="loc">Lviv, Ukraine <img src={world} alt="world"/></p>
                 </div>
              </a>
  
             </div>
        </div>  
     <div className="jobseeker-link">
     <h2>Jobseeker Guide</h2>      
       <a href="#seeAll">See all</a>
   </div>
      <div className="container">
         <div className="proactive-guide">
           <img src={pGuide} alt="p-guide" />
           <div className="proactive-guide-text">
              <a href="#proactive">A Proactive Guide to Getting Happy at Work</a>
                <p>Are you unhappy with your job, or finding it difficult to find your feet professionally? Life Coach Cilian Murphy has some proactive advice for how to steer your career towards a positive outcome.</p>
                <ul>
                  <li>#happiness</li>
                  <li>#coaching</li>
                </ul>
           </div>
       </div>
        <div className="graduating-soon">
           <img src={gSoon} alt="graduating-soon" />
           <div className="graduating-soon-text">
              <a href="#gSoon">Graduating Soon? Let’s Get You Ready for the Working World</a>
                <p>Results are filling our headlines right now, from Olympics to Leaving Cert and A Levels. Column inches are filled with advice for those who have just received exam results, and are deciding on their next steps after school. But what about people about to be spit out at the other end of the university conveyor belt?</p>
                <ul>
                  <li>#graduate</li>
                  <li>#university</li>
                  <li>#career</li>
                </ul>
           </div>
       </div>
  
      </div>
      
  
  
  </div>	
  <nav className="bottom-nav">
  
      <div className="home">
        <img src={homeIcon} alt="home-icon" />
         <Link to="home">Home</Link>
      </div>
  
  <div className="search">
    <img src={searchIcon} alt="search-icon" />
    <Link to="/search">Search</Link>
  </div>
  
   <div className="job">
    <img src={workIcon} alt="work-icon" />
    <Link to="/job">My Jobs</Link>
  </div>
  
    <div className="s-prof">
    <img src={profIcon} alt="prof-icon" />
    <Link to="/profile">SmartProfile</Link>
    </div>
  
  </nav>
</div>  
    )
}



export default Home