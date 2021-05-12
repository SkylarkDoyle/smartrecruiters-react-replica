import React from "react"
import "./job/job.css"
import logo from "./img/smartrecruiters_bulb.png"
import textLogo from "./img/smartrecruiters_medium.png"
import bell from "./img/bell.png"
import avatar from "./img/avatar-placeholder.png"
import dArr from "./img/down-arrow.png"
import more from "./img/more-icon.png"
import uArr from "./img/up-arrow.png"
import homeIcon from "./img/white-home-icon.png"
import searchIcon from "./img/search-icon.png"
import workIcon from "./img/work-icon.png"
import profIcon from "./img/profile-icon.png"
import cancel from "./img/cancel-icon.png"
import sigma from "./img/sigma.png"
import evLogo from "./img/evolution.png"
import {Link} from "react-router-dom"


function Job(){
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
var jobToggled = false;

function jobToggle(){
var job = document.querySelector(".job-header-user");
var displayjob = document.querySelector(".user-job");
var arr = document.querySelector(".d-arr");


if (jobToggled === false) {
job.addEventListener("click", function(){
	//change down-arrow souce to up-arrow
    displayjob.style.display = "block";
    arr.src = uArr;
})
jobToggled = true;
}

else if (jobToggled === true) {
job.addEventListener("click", function(){
    displayjob.style.display = "none";
    arr.src = dArr;
})
jobToggled = false;
}

};


//For MObile
var extFormDis = false;

function plusAddForm(){
   var plusaddExtForm = document.querySelector(".plus-add");
   var showExtForm = document.querySelector(".add-ext-form");

// if plus or add external job button is clicked on display a form 
	 if(extFormDis === false){
           plusaddExtForm.addEventListener("click", function(){
           	  plusaddExtForm.style.color = "#848484";
           	  plusaddExtForm.style.backgroundColor = "#ececec";
           	  plusaddExtForm.style.border = "1px solid #ececec";
           	  plusaddExtForm.style.cursor = "none";
           	  showExtForm.style.display = "block";
           });
           extFormDis = true;
	 }
};

//if the show less or cancel link is clicked.. remove the form
function removeExtForm(){
	var cancelExtForm = document.querySelector(".btn-one");
	var plusaddExtForm = document.querySelector(".add-form");
    var showExtForm = document.querySelector(".add-ext-form");
//if pencil is clicked on again remove form and links	 
	 if(extFormDis === true) {
	 	 cancelExtForm.addEventListener("click", function(){
	 	 	 plusaddExtForm.style.color = "#fff";
	 	 	plusaddExtForm.style.backgroundColor = "#0b68e8";
	 	 	plusaddExtForm.style.border = "1px solid #0b68e8";
	 	 	plusaddExtForm.style.cursor = "pointer";
	 	 	 showExtForm.style.display = "none";
	 	 });
         extFormDis = false;
	 }
};


function displayExtForm(){
   var addExtForm = document.querySelector(".add-form");
   var showExtForm = document.querySelector(".add-ext-form");

// if plus or add external job button is clicked on display a form 
	 if(extFormDis === false){
           addExtForm.addEventListener("click", function(){
           	  addExtForm.style.color = "#848484";
           	  addExtForm.style.backgroundColor = "#ececec";
           	  addExtForm.style.border = "1px solid #ececec";
           	  addExtForm.style.cursor = "none";
           	  showExtForm.style.display = "block";
           });
           extFormDis = true;
	 }
};



var showMoreInputDis = false;

function displayMoreInputs(){
   var showMore = document.querySelector(".show-more");
   var moreInputs = document.querySelector(".more-inputs");

// if pencil is clicked on display a form and the above links
	 if(showMoreInputDis === false){
           showMore.addEventListener("click", function(){
           	  showMore.style.display = "none";
           	  moreInputs.style.display = "block";
           });
           showMoreInputDis = true;
	 }
};

//if the show less or cancel link is clicked.. remove the form

function removeMoreInputs(){
	var showLess = document.querySelector(".show-less");
	var showMore = document.querySelector(".show-more");
    var moreInputs = document.querySelector(".more-inputs");
//if pencil is clicked on again remove form and links	 
	 if(showMoreInputDis === true) {
	 	 showLess.addEventListener("click", function(){
	 	 	showMore.style.display = "block";
	 	 	 moreInputs.style.display = "none";
	 	 });
         showMoreInputDis = false;
	 }
};


var toolTipDis = false;
function toolTipInfo(){
      var logoHover = document.querySelector(".logo");
      var toolTip = document.querySelector(".tooltip");

    //if you hover on info icon display toolTip
    if(toolTipDis === false){
    	logoHover.addEventListener("mouseover", function(){
    		toolTip.style.display = "block";
    	});
    	toolTipDis = true;
    } 
    else if(toolTipDis === true){
    	logoHover.addEventListener("mouseout", function() {
    		  toolTip.style.display = "none";
    	});
    	toolTipDis = false;
    }
}


var toolTipTwoDis = false;

function toolTipTwoInfo(){
      var logoHover = document.querySelector(".logo-two");
      var toolTip = document.querySelector(".tooltip-two");

    //if you hover on info icon display toolTip
    if(toolTipTwoDis === false){
    	logoHover.addEventListener("mouseover", function(){
    		toolTip.style.display = "block";
    	});
    	toolTipTwoDis = true;
    } 
    else if(toolTipTwoDis === true){
    	logoHover.addEventListener("mouseout", function() {
    		  toolTip.style.display = "none";
    	});
    	toolTipTwoDis = false;
    }
}

var scrollDivDis = false;

function scrollDivClick(){
      var saved = document.querySelector("#saved");
      var myApp = document.querySelector("#my-app");
      var scrollDiv = document.querySelector(".scroll-div");
      var scrollDivApp = document.querySelector(".scroll-div-application");
   

    //if you hover on info icon display myApp
    if(scrollDivDis === false){
    	saved.addEventListener("click", function(){
    		saved.style.borderBottom = "4px solid #0b68e8";
    		myApp.style.borderBottom = "none";
    		scrollDiv.style.display = "block";
            scrollDivApp.style.display = "none";
    	});
    	scrollDivDis = true;
    } 
}

var scrollDivAppDis = false;

function scrollDivAppClick(){
      var saved = document.querySelector("#saved");
      var myApp = document.querySelector("#my-app");
      var scrollDiv = document.querySelector(".scroll-div");
      var scrollDivApp = document.querySelector(".scroll-div-application");
   

    //if you hover on info icon display myApp
    if( scrollDivAppDis === false){
    	myApp.addEventListener("click", function(){
    		myApp.style.borderBottom = "4px solid #0b68e8";
    		saved.style.borderBottom = "none";
    		scrollDivApp.style.display = "block";
            scrollDiv.style.display = "none";
    	});
    	 scrollDivAppDis = true;
    } 
}

    return(
        <div>
                <div className="job-wrapper"> 
   <div className="job-header">
     <Link to="/profile" className="job-logo">
       <img src={logo} className="icon-logo" alt="logo" /> 
       <img src={textLogo} className="text-logo" alt="txt-logo" /></Link>
       <ul className="job-links">
           <li><Link to="home">Home</Link></li>
           <li><Link to="/search">Search</Link></li>
           <li><Link to="/job" className="active-page">My Jobs</Link></li>
       </ul>
     <div className="job-nav-links">
    <img src={bell} className="bellImg" onClick={bellToggle} alt="bell" />
              <div className="notification">
                <div className="bell-logo"></div>
                   <p className="notification-header">No notifications</p>
                   <p className="notification-text">We'll notify you when a matching job arrives!</p>
              </div>

         <div className="job-header-user" onClick={jobToggle}>
              <img src={avatar} alt='avatar' />
              <p className="username">Olalekan Adebari</p>
              <img src={dArr} className="d-arr" alt="d-arr" />
   <div className="user-job">
     <h4>Olalekan Adebari</h4>
        <p>adebari.olalekan.oluwaseun@gmail.com</p>
        <Link to="/profile" className="user-smart-link">My SmartProfile</Link>
            <ul>
                  <li><a href="#job">Smart Job Search <span>NEW</span></a></li>
                  <li className="hidden"><Link to="/search">Search</Link></li>
                  <li className="hidden"><Link to="/job">My Jobs</Link></li>
                  <li><a href="#guide">Jobseeker Guide</a></li>
                  <li><Link to="/search">Settings</Link></li>
                  <li><Link to="/signin">Logout</Link></li>
                </ul>
              </div>
         </div>
     </div>
      </div>
  

<div className="job-container">
<ul className="nav-lists">
   <li id="saved" onClick={scrollDivClick}>Saved Jobs</li>
   <li id="my-app" onClick={scrollDivAppClick}>My Applications</li>
   <span onClick={plusAddForm} className="plus-add">+</span>
 <p className="add-form" onClick={displayExtForm}>Add external job</p>
</ul> 
  <div className="ext">
    <p>You can now save automatically any job you like on the web with a simple click. <span>Learn more</span></p>
   <a href="#ext">Download extension</a>
   <img src={cancel} alt="cancel" />
  </div> 
<form className="add-ext-form">
<h2>Add external job</h2>
<p>Add a job manually from any job board in the web</p>
<label for="comp" >Company <span>*</span></label>
<input type="text" name="comp" placeholder="Company" />
<label for="job-title">Job Title <span>*</span></label>
<input type="text" name="job-title" placeholder="Job Title" />
<label for="url">URL / Application link</label>
<input type="text" name="url" placeholder="https://..." />
<h4 className="show-more" onClick={displayMoreInputs}>Show more</h4>
<div className="more-inputs">
 <label for="ind">Industry</label>
 <select name="ind">
   <option>Select</option>
 </select>
 <label for="emp-type">Employment Type</label>
 <select name="emp-type">
   <option>Select</option>
 </select>
 <label for="snr">Seniority</label>
 <select name="snr">
   <option>Select</option>
 </select>
 <label for="date">Posted Date</label>
 <input type="date" name="date" placeholder="Pick a date" />
 <label for="loc">Location</label>
 <input type="text" name="loc" placeholder="Location" />
 <label for="description">Description</label>
 <textarea name="description" placeholder="Enter a description here"></textarea>
 <label for="job-saved">Where do you want this job to be saved?</label>
 <select name="job-saved">
   <option>Favorites</option>
   <option>Interested</option>
   <option>Maybe</option>
 </select>
 <h4 className="show-less" onClick={removeMoreInputs}>Show less</h4>
</div>
<div className="btns">
  <h5 className="btn-one" onClick={removeExtForm}>Cancel</h5>
  <h5 className="btn-two">Add</h5>
</div>
</form>

<div className="scroll-div">
<div className="divs">
  <h3>FAVORITES<span>0</span><img src={more} alt="more" /></h3>
  
  <p>No jobs added</p>

</div>
<div className="divs">
 <h3>INTERESTED<span>0</span><img src={more} alt="more" /></h3>
 <p>No jobs added</p>
</div>
<div className="divs">
 <h3>MAYBE <span>0</span><img src={more} alt="more" /></h3>
 <p>No jobs added</p>
</div>
</div>
 
<div className="scroll-div-application">
<div className="divs">
  <h3>APPLIED<span>1</span><img src={more} alt="more" /></h3>
<div className="works">
   <div className="tooltip">
       <p>This job was applied from your <br />SmartRecruiters account, 
       when <br/>recruiters update your application status <br/>your tile will move</p>
   </div>
    <img src={logo} className="logo" onMouseOver={toolTipInfo} alt="logo" />
    <img src={more} className="more" alt="more" />
    <img src={sigma} className="org-logo" alt="sigma-logo" />
   <h6>Middle/Senior Scala <br />Developer (Online...<br />
   <span style={{marginLeft: "60px"}}>Sigma Software</span>
 </h6>
  </div>
</div>

<div className="divs">
<h3>IN REVIEW<span>1</span><img src={more} alt="more" /></h3>
  <div className="works">
    <div className="tooltip-two">
       <p>This job was applied from your <br />SmartRecruiters account, 
       when <br />recruiters update your application status <br />your tile will move</p>
   </div>
    <img src={logo} className="logo logo-two" onMouseOver={toolTipTwoInfo} alt="logo" />
    <img src={more} className="more" alt="more" />
    <img src={evLogo} className="org-logo" alt="ev-logo" />
    <h6>Scala Engineer <br /><span>Evolution</span></h6>
  </div>
</div>

<div className="divs">
 <h3>INTERVIEW <span>0</span><img src={more} alt="more" /></h3>
 <p className="para">No jobs added</p>
</div>

<div className="divs">
 <h3>OFFER <span>0</span><img src={more} alt="more" /></h3>
 <p className="para">No jobs added</p>
</div>
</div>


</div>

</div>


<nav className="bottom-nav">

 <div className="home">
   <img src={homeIcon} alt="home" />
    <Link to="/home">Home</Link>
 </div>

<div className="search">
<img src={searchIcon} alt="search" />
<Link to="/search">Search</Link>
</div>

<div className="job">
<img src={workIcon} alt="work" />
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


export default Job