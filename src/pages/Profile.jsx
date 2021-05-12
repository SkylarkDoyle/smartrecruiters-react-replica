import React from "react"
import "./profile/profile.css"
import logo from "./img/smartrecruiters_bulb.png"
import textLogo from "./img/smartrecruiters_medium.png"
import bell from "./img/bell.png"
import avatar from "./img/avatar-placeholder.png"
import pencil from "./img/pencil.png"
import infoBlueIcon from "./img/blue-info.png"
import blackInfoIcon from "./img/black-info.png"
import parsing from "./img/parsing.png"
import marker from "./img/marker-icon.png"
import linkedIn from "./img/linkedin-icon.jpg"
import emailIcon from "./img/email-icon.png"
import phoneIcon from "./img/phone-icon.png"
import world from "./img/world-icon.png"
import toggleOff from "./img/toggle-off.png"
import toggleOn from "./img/toggle-on.png"
import cancelIcon from "./img/cancel-icon.png"
import homeIcon from "./img/home-icon.png"
import searchIcon from "./img/search-icon.png"
import workIcon from "./img/work-icon.png"
import profIcon from "./img/profile-icon.png"
import dArr from "./img/down-arrow.png"
import uArr from "./img/up-arrow.png"
import {Link} from "react-router-dom"

function Profile(){
    
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
var profile = document.querySelector(".profile-header-user");
var displayProfile = document.querySelector(".user-profile");
var arr = document.querySelector(".d-arr");


if (profileToggled === false) {
profile.addEventListener("click", function(){
	//change down-arrow souce to up-arrow
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


//for profile pencil suggestion

var profilePenSuggDis = false;

  function profilePenSugg(){
    var profilePencilHover = document.querySelector("#profile-pencil");
var pencilSugg = document.querySelector("#prof-pen-sugg");

if (profilePenSuggDis === false) {
   profilePencilHover.addEventListener("mouseover", function(){
      pencilSugg.style.display = "block";
   });
   profilePenSuggDis = true;
}
else if (profilePenSuggDis === true){
     profilePencilHover.addEventListener("mouseout", function(){
      pencilSugg.style.display = "none";
    });
   profilePenSuggDis = false;  
}
}

//for the dotted line suggestion

var moreIconSuggDis = false;

  function moreIconSugg(){
    var moreIconHover = document.querySelector(".evince-ng-text .more-icon");
    var moreSugg = document.querySelector(".evince-ng-text #more-icon-sugg");

if (moreIconSuggDis === false) {
   moreIconHover.addEventListener("mouseover", function(){
      moreSugg.style.display = "block";
   });
   moreIconSuggDis = true;
}
else if (moreIconSuggDis === true){
     moreIconHover.addEventListener("mouseout", function(){
      moreSugg.style.display = "none";
    });
   moreIconSuggDis = false;  
}
}

//for the dotted line suggestion

var moreIconFreeSuggDis = false;


  function moreIconFreeSugg(){
    var moreIconFreeHover = document.querySelector(".freelancer .freelancer-text .more-icon");
    var moreFreeSugg = document.querySelector(".freelancer .freelancer-text #more-icon-sugg");

if (moreIconFreeSuggDis === false) {
   moreIconFreeHover.addEventListener("mouseover", function(){
      moreFreeSugg.style.display = "block";
   });
   moreIconFreeSuggDis = true;
}
else if (moreIconFreeSuggDis === true){
     moreIconFreeHover.addEventListener("mouseout", function(){
      moreFreeSugg.style.display = "none";
    });
   moreIconFreeSuggDis = false;  
}
}


var moreIconEduSuggDis = false;


  function moreIconEduSugg(){
    var moreIconEduHover = document.querySelector(".edu .institute .more-icon");
    var moreFreeSugg = document.querySelector(".edu .institute #more-icon-sugg");

if (moreIconEduSuggDis === false) {
   moreIconEduHover.addEventListener("mouseover", function(){
      moreFreeSugg.style.display = "block";
   });
   moreIconEduSuggDis = true;
}
else if (moreIconEduSuggDis === true){
     moreIconEduHover.addEventListener("mouseout", function(){
      moreFreeSugg.style.display = "none";
    });
   moreIconEduSuggDis = false;  
}
}


//to display more opion when dotted line is clicked for evince-ng

var moreOptionDis = false;

  function moreEvOption(){
    var moreIconClick = document.querySelector(".evince-ng-text .more-icon");
    var moreOptionDiv = document.querySelector(".evince-ng-text .more-options");

if (moreOptionDis === false) {
   moreIconClick.addEventListener("click", function(){
      moreOptionDiv.style.display = "block";
   });
   moreOptionDis = true;
}
else if (moreOptionDis === true){
     moreIconClick.addEventListener("click", function(){
      moreOptionDiv.style.display = "none";
    });
   moreOptionDis = false;  
}
}

//to display more opion when dotted line is clicked for freelancer

var moreFreeOptionDis = false;

  function moreFreeOption(){
    var moreIconClick = document.querySelector(".freelancer-text .more-icon");
    var moreOptionDiv = document.querySelector(".freelancer-text .more-options");

if (moreFreeOptionDis === false) {
   moreIconClick.addEventListener("click", function(){
      moreOptionDiv.style.display = "block";
   });
   moreFreeOptionDis = true;
}
else if (moreFreeOptionDis === true){
     moreIconClick.addEventListener("click", function(){
      moreOptionDiv.style.display = "none";
    });
   moreFreeOptionDis = false;  
}
}


//to display more opion when dotted line is clicked for education

var moreEduOptionDis = false;

  function moreEduOption(){
    var moreIconClick = document.querySelector(".edu .institute .more-icon");
    var moreOptionDiv = document.querySelector(".edu .institute .more-options");

if (moreEduOptionDis === false) {
   moreIconClick.addEventListener("click", function(){
      moreOptionDiv.style.display = "block";
   });
   moreEduOptionDis = true;
}
else if (moreEduOptionDis === true){
     moreIconClick.addEventListener("click", function(){
      moreOptionDiv.style.display = "none";
    });
   moreEduOptionDis = false;  
}
}



//for personal info pencil suggestion

var pInfoPenSuggDis = false;

  function pInfoPenSugg(){
    var pencilHover = document.querySelector(".personal-info .personal-info-title .pencil");
    var pInfoSugg = document.querySelector("#p-info-pen-sugg");

if (pInfoPenSuggDis === false) {
   pencilHover.addEventListener("mouseover", function(){
      pInfoSugg.style.display = "block";
   });
   pInfoPenSuggDis = true;
}
else if (pInfoPenSuggDis === true){
     pencilHover.addEventListener("mouseout", function(){
      pInfoSugg.style.display = "none";
    });
   pInfoPenSuggDis = false;  
}
}


//remote job toggling

var remoteJobToggle = false;

function remoteJobToggler(){
   var remoteToggle = document.querySelector(".remote-job-img");

   if (remoteJobToggle === false) {
     remoteToggle.addEventListener("click", function(){
       remoteToggle.src = toggleOn;
     });
     remoteJobToggle = true;
   }
else if(remoteJobToggle === true){
   remoteToggle.addEventListener("click", function(){
     remoteToggle.src = toggleOff;
   });
    remoteJobToggle = false;
}

}


//FOR PERSONALINFO
//if the pencil icon is clicked display the form and the personal-info-links and remove
//personal details div
var personalInfoFormDisplay = false;

function displayPILinksAndForm(){
   var pencilToggle = document.querySelector(".personal-info .personal-info-title .pencil");
   var personalInfoLinks = document.querySelector(".personal-info-links");
   var personalInfoForm = document.querySelector(".personal-info-form");
   var personalDetails = document.querySelector(".personal-details");

// if pencil is clicked on display a form and the above links
	 if(personalInfoFormDisplay === false){
           pencilToggle.addEventListener("click", function(){
           	personalInfoLinks.style.display = "grid";
           	personalInfoForm.style.display = "block";
           	 pencilToggle.style.display = "none";
             personalDetails.style.display = "none";
           });
           personalInfoFormDisplay = true;
	 }
};

//if the cancel link is clicked.. remove the form, personal-links and display pencil.

function removePILinksAndForm(){
	var pencilToggle = document.querySelector(".personal-info .personal-info-title .pencil");
	var personalInfoLinks = document.querySelector(".personal-info-links");
   var personalInfoForm = document.querySelector(".personal-info-form");
   var personalFormLinkOne = document.querySelector(".personal-info-links .link-one");
   var personalDetails = document.querySelector(".personal-details");
//if pencil is clicked on again remove form and links	 
	 if(personalInfoFormDisplay === true) {
	 	 personalFormLinkOne.addEventListener("click", function(){
	 	 	personalInfoLinks.style.display = "none";
	 	 	personalInfoForm.style.display = "none";
	 	 	pencilToggle.style.display = "block";
           personalDetails.style.display = "block";
	 	 });
         personalInfoFormDisplay = false;
	 }
};



//FOR ABOUTME

//if the pencil icon is clicked display the form and the about-me-links
var aboutMeFormDisplay = false;

function displayLinksAndForm(){
   var pencilToggle = document.querySelector(".about-me .pencil");
   var aboutMeLinks = document.querySelector(".about-me-links");
   var aboutMeForm = document.querySelector(".about-me-form");

// if pencil is clicked on display a form and the above links
	 if(aboutMeFormDisplay === false){
           pencilToggle.addEventListener("click", function(){
           	aboutMeLinks.style.display = "grid";
           	aboutMeForm.style.display = "block";
           	 pencilToggle.style.display = "none";

           })
           aboutMeFormDisplay = true;
	 }
};

//if the cancel link is clicked.. remove the form and the about-me-links

function removeLinksAndForm(){
	var pencilToggle = document.querySelector(".about-me .pencil");
	var aboutMeLinks = document.querySelector(".about-me-links");
   var aboutMeForm = document.querySelector(".about-me-form");
   var formLinkOne = document.querySelector(".about-me-links .link-one");
//if pencil is clicked on again remove form and links	 
	 if(aboutMeFormDisplay === true) {
	 	 formLinkOne.addEventListener("click", function(){
	 	 	aboutMeLinks.style.display = "none";
	 	 	aboutMeForm.style.display = "none";
	 	 	pencilToggle.style.display = "block";
	 	 });
         aboutMeFormDisplay = false;
	 }
};



//FOR EXPERIENCE
// if add button is click---display exp-form
var expFormDisplay = false;

function displayExpForm(){
   var addExpToggle = document.querySelector(".add-exp");
   var expForm = document.querySelector(".exp-form");

// if pencil is clicked on display a form and the above links
	 if(expFormDisplay === false){
           addExpToggle.addEventListener("click", function(){
           	  expForm.style.display = "grid";

           })
           expFormDisplay = true;
	 }
};

//if the cancel link is clicked.. remove the form

function removeExpForm(){
	var removeForm = document.querySelector(".exp-update-btn-no");
   var expForm = document.querySelector(".exp-form");
//if pencil is clicked on again remove form and links	 
	 if(expFormDisplay === true) {
	 	 removeForm.addEventListener("click", function(){
	 	 	expForm.style.display = "none";
	 	 });
         expFormDisplay = false;
	 }
};


//FOR EDUCATION
// if add button is click---display exp-form
var eduFormDisplay = false;

function displayEduForm(){
   var addEduToggle = document.querySelector(".add-edu");
   var eduForm = document.querySelector(".edu-form");

// if pencil is clicked on display a form and the above links
	 if(eduFormDisplay === false){
           addEduToggle.addEventListener("click", function(){
           	  eduForm.style.display = "block";
           })
           eduFormDisplay = true;
	 }
};

//if the cancel link is clicked.. remove the form

function removeEduForm(){
	var removeForm = document.querySelector(".edu-update-btn-no");
   var eduForm = document.querySelector(".edu-form");
//if pencil is clicked on again remove form and links	 
	 if(eduFormDisplay === true) {
	 	 removeForm.addEventListener("click", function(){
	 	 	eduForm.style.display = "none";
	 	 });
         eduFormDisplay = false;
	 }
};



//FOR SKILLS
// if add button is click---display skills-form
var skillsFormDisplay = false;

function displaySkillsForm(){
   var addSkillsToggle = document.querySelector(".skills .plus-sign");
   var skillsLinks = document.querySelector(".skills-links");
   var skillsForm = document.querySelector(".skills-form");
// if pencil is clicked on display a form and the above links
	 if(skillsFormDisplay === false){
           addSkillsToggle.addEventListener("click", function(){
           	addSkillsToggle.style.display = "none";
           	  skillsLinks.style.display = "inline-block";
           	  skillsForm.style.display = "block";

           });
           skillsFormDisplay = true;
	 }
};

//if the cancel link is clicked.. remove the form

function removeSkillsForm(){
	var addSkillsToggle = document.querySelector(".skills .plus-sign");
	var removeForm = document.querySelector(".skills-links .cancel-form");
	var skillsLinks = document.querySelector(".skills-links");
   var skillsForm = document.querySelector(".skills-form");
//if pencil is clicked on again remove form and links	 
	 if(skillsFormDisplay === true) {
	 	 removeForm.addEventListener("click", function(){
	 	 	addSkillsToggle.style.display = "inline-block";
	 	 	skillsLinks.style.display = "none";
	 	 	skillsForm.style.display = "none";
	 	 });
         skillsFormDisplay = false;
	 }
};



//FOR LANGUAGES
// if add button is click---display languages-form
var languagesFormDisplay = false;

function displayLanguagesForm(){
   var addLanguagesToggle = document.querySelector(".languages .plus-sign");
   var languagesLinks = document.querySelector(".languages-links");
   var languagesForm = document.querySelector(".languages-form");
   var addLangBtn = document.querySelector(".add-lang");
   var cancelForm = document.querySelector(".cancel-icon");
// if plus button is clicked on display a form and the above links
	 if(languagesFormDisplay === false){
           addLanguagesToggle.addEventListener("click", function(){
           	addLanguagesToggle.style.display = "none";
           	  languagesLinks.style.display = "inline-block";
           	  languagesForm.style.display = "block";
           	  addLangBtn.style.display = "block";
           	  cancelForm.style.display = "block";
           });
           languagesFormDisplay = true;
	 }
};

//if the cancel link is clicked.. set form display to none;
function removeLanguagesForm(){
	var addlanguagesToggle = document.querySelector(".languages .plus-sign");
	var removeForm = document.querySelector(".languages-links .cancel-form");
	var languagesLinks = document.querySelector(".languages-links");
   var languagesForm = document.querySelector(".languages-form");
   var addLangBtn = document.querySelector(".add-lang");
   var cancelForm = document.querySelector(".cancel-icon");
//if cancel button is clicked on again remove form and links	 
	 if(languagesFormDisplay === true) {
	 	 removeForm.addEventListener("click", function(){
	 	 	addlanguagesToggle.style.display = "inline-block";
	 	 	languagesLinks.style.display = "none";
	 	 	languagesForm.style.display = "none";
             addLangBtn.style.display = "none";
             cancelForm.style.display = "none";
	 	 });
         languagesFormDisplay = false;
	 }
};

var languagesFormDis = true;
//when cancel or x icon is clicked on
function cancelLanguagesForm(){
   var languagesForm = document.querySelector(".languages-form");
   var cancelForm = document.querySelector(".cancel-icon");
//if cancel button is clicked on again remove form and links	 
	 if(languagesFormDis === true) {
	 	 cancelForm.addEventListener("click", function(){
	 	 	languagesForm.style.display = "none";           
             cancelForm.style.display = "none";
	 	 });
         languagesFormDis = false;
	 }
};


//add language link to display form again
function addLang(){
	 var addLangBtn = document.querySelector(".add-lang");
	 var languagesForm = document.querySelector(".languages-form");
   var cancelForm = document.querySelector(".cancel-icon");
  //if add button is clicked on display form and cancel icon back
	 if(languagesFormDis === false){
      addLangBtn.addEventListener("click", function(){     
        languagesForm.style.display = "block";
         cancelForm.style.display = "block";
   });
       languagesFormDis = true;
   }
};

// var languagesFormAdd = false;
	//seems not to work i will try it later
       // var languagesForm = document.querySelector(".languages-form");
       // var cln = languagesForm.cloneNode(true);
       // var container = document.querySelector(".languages");
       // container.appendChild(cln);

       //when info icon is hover on display title-suggestion
var titleSuggDis = false;
function infoTitleHover(){
      var infoProTitle = document.querySelector(".pro-title .info");
      var titleSuggestion = document.querySelector(".title-suggestion");

    //if you hover on info icon display titleSuggestion
    if(titleSuggDis === false){
    	infoProTitle.addEventListener("mouseover", function(){
    		titleSuggestion.style.display = "block";
    	});
    	titleSuggDis = true;
    } 
    else if(titleSuggDis === true){
    	infoProTitle.addEventListener("mouseout", function () {
    		 titleSuggestion.style.display = "none";
    	});
    	titleSuggDis = false;
    }


}

//for about me
var aboutSuggDis = false;
function aboutInfoHover(){
      var aboutIcon = document.querySelector(".about-info-icon");
      var aboutSuggestion = document.querySelector(".about-me-suggestion");

    //if you hover on info icon display aboutSuggestion
    if(aboutSuggDis === false){
    	aboutIcon.addEventListener("mouseover", function(){
    		aboutSuggestion.style.display = "block";
    	});
    	aboutSuggDis = true;
    } 
    else if(aboutSuggDis === true){
    	aboutIcon.addEventListener("mouseout", function() {
    		  aboutSuggestion.style.display = "none";
    	});
    	aboutSuggDis = false;
    }


}

//for aboutMePencilInfo
var aboutMePenInfoDis = false;
function aboutMePenInfo(){
      var aboutMePen = document.querySelector(".about-me .pencil");
      var aboutMePenInfo = document.querySelector(".about-me .pencil-info");

    //if you hover on info icon display aboutMePenInfo
    if(aboutMePenInfoDis === false){
    	aboutMePen.addEventListener("mouseover", function(){
    		aboutMePenInfo.style.display = "block";
    	});
    	aboutMePenInfoDis = true;
    } 
    else if(aboutMePenInfoDis === true){
    	aboutMePen.addEventListener("mouseout", function() {
    		  aboutMePenInfo.style.display = "none";
    	});
    	aboutMePenInfoDis = false;
    }


}

//input to show red when touchend

function nonEmpty(){
  var nonempty = document.querySelector(".non-empty"); 
  var emptyMsg = document.querySelector(".error-msg");
     	if (nonempty.value === "") {
      nonempty.style.borderColor = "#b83030"; 
     nonempty.style.backgroundColor = "#fff6e1"; 
     nonempty.style.backgroundImage = "url('./img/warning-icon.png')";
     nonempty.style.backgroundSize = "5%";
     nonempty.style.backgroundRepeat = "no-repeat";
     nonempty.style.backgroundPosition = "right";
     emptyMsg.style.display = "block";
     return false;
     }
     
  else if(nonempty.value !== ""){
  	 nonempty.style.borderColor = "#0b68e8"; 
     nonempty.style.backgroundColor = "#fff"; 
     nonempty.style.backgroundImage = "url('./img/ticked.png')";
     nonempty.style.backgroundSize = "5%";
     nonempty.style.backgroundRepeat = "no-repeat";
     nonempty.style.backgroundPosition = "right";
     emptyMsg.style.display = "none";
     return true;
  }   

 }

function nonInsEmpty(){
  var nonInsempty = document.querySelector(".non-ins-empty"); 
  var emptyInsMsg = document.querySelector(".edu-form .error-ins-msg");
   if (nonInsempty.value === "") {
     nonInsempty.style.borderColor = "#b83030"; 
     nonInsempty.style.backgroundColor = "#fff6e1"; 
     nonInsempty.style.backgroundImage = "url('./img/warning-icon.png')";
     nonInsempty.style.backgroundSize = "5%";
     nonInsempty.style.backgroundRepeat = "no-repeat";
     nonInsempty.style.backgroundPosition = "right";
     emptyInsMsg.style.display = "block";
     return false;
 }

  else if(nonInsempty.value !== ""){
      emptyInsMsg.style.display = "none";
      nonInsempty.style.borderColor = "#0b68e8"; 
     nonInsempty.style.backgroundColor = "#fff"; 
     nonInsempty.style.backgroundImage = "url('./img/ticked.png')";
     nonInsempty.style.backgroundSize = "5%";
     nonInsempty.style.backgroundRepeat = "no-repeat";
     nonInsempty.style.backgroundPosition = "right";
     return true;
 }
    }



    return(
    <div>
        <div className="sticky">
      <a href="#feed">Feedback</a>
  </div>
    <div className="profile-wrapper">
    	<div className="profile-header">
    		<Link to="/home" className="profile-logo">
    			<img src={logo} className="icon-logo" alt="logo" /> 
    			<img src={textLogo} className="text-logo" alt="text-logo" /></Link>
          <ul className="profile-links">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/job">My Jobs</Link></li>
          </ul>
    		<div className="profile-nav-links">
                 <img src={bell} className="bellImg" onClick={bellToggle} alt="bell" /> 
                 <div className="notification">
                   <div className="bell-logo"></div>
                      <p className="notification-header">No notifications</p>
                      <p className="notification-text">We'll notify you when a matching job arrives!</p>
                 </div>

            <div className="profile-header-user" onClick={profileToggle}>
                 <img src={avatar} alt="avatar" />
                 <p className="username">Olalekan Adebari</p>
                 <img src={dArr} className="d-arr" alt="d-arr" />
                 <div className="user-profile">
                   <h4>Olalekan Adebari</h4>
                   <p>adebari.olalekan.oluwaseun@gmail.com</p>
                   <Link to="/profile" className="user-smart-link">
                      My SmartProfile</Link>
                   <ul>
                     <li><Link to="/home">Smart Job Search <span>NEW</span></Link></li>
                     <li className="hidden"><Link to="/search">Search</Link></li>
                     <li className="hidden"><Link to="/job">My Jobs</Link></li>
                     <li><a href="#guide">Jobseeker Guide</a></li>
                     <li><Link to="/setting">Settings</Link></li>
                     <li><Link to="/signin">Logout</Link></li>
                   </ul>
                 </div>
            </div>
    		</div>
    	</div>

 <div className="profile-bg"></div>
    <div className="profile-div">
      <div className="profile-img">
         <img src={avatar} alt="avatar" />
         <div className="profile-img-icon">
          <img src={pencil} id="profile-pencil" onMouseOver={profilePenSugg} alt="pencil" />
          <p id="prof-pen-sugg">Update profile photo</p>
         </div>
      </div>
       <div className="profile-text">
       <h2>Olalekan Adebari</h2>
       <div className="title-suggestion">
         <p>Add a title (such as 'Product Designer' or 'Sales Consulant')
            to describe your experience or the role you're looking for.
          </p>
       </div>
       <div className="pro-title">
          <a href="#prof">Add a Professional Title</a>
          <img className="info" src={infoBlueIcon} onMouseOver={infoTitleHover} alt="info" />
       </div>
      
    </div>
     <a href="#share" className="profile-div-share">Share</a>
  </div>

<div className="update-div">
  <p><img src={blackInfoIcon} alt="info" />Would you like to update the companies you applied to with recent changes?</p>
  <div className="update-btn">
     <a href="#no" className="update-btn-no">No</a>
     <a href="#yes" className="update-btn-yes">Yes</a>
  </div>
</div>

  <div className="profile-wrapper-two">
    <div className="profile-completeness">
       <h4>Profile completeness</h4>
       <div className="progress">
          <div className="completion remain"></div>
      </div>
         <span>45%</span>
         <div className="parsing">
          <img src={parsing} alt="parsing" />
          <p>Drop your resume here to quickly build <strong>SmartProfile</strong></p>
         </div>
    </div>

<div className="information">
   <div className="personal-info">
    <div className="personal-info-links">
         <p className="link-one" onClick={removePILinksAndForm}>Cancel</p>
        <p className="link-two">Save</p>
    </div>
    <div className="personal-info-title">
    <h3>Personal Information</h3>
    <div className="pencil" onClick={displayPILinksAndForm} onMouseOver={pInfoPenSugg}></div>
    <p id="p-info-pen-sugg">Edit</p>
  </div>
     <div className="personal-details">
     <p><img src={emailIcon} alt="email-icon" />adebari.olalekan.oluwaseun@gmail.com</p>
     <p><img src={marker} alt="marker" />Lagos, Nigeria</p>
     <p><img src={phoneIcon} alt="phone-img" />+2348129014778</p>
     <div className="info-social-links">
        <h2>Social Links</h2>
        <img src={linkedIn} alt="linked-in" />
        <img src={world} alt="world-icon" />
     </div>
      <div className="remote-job">
        <p>Open to remote work</p>
        <img src={toggleOff} className="remote-job-img" onClick={remoteJobToggler} alt="remote-job-img"/>
      </div> 
     </div>
     <form className="personal-info-form">
       <label for="first">First name</label>
       <input type="text" name="first" value="Olalekan" className="completed" />
       <label for="last">Last Name</label>
       <input type="text" name="last" value="Adebari" className="completed" />
       <label for="prof-title">Professional Title</label>
       <input type="text" name="prof-title" id="prof" placeholder="Enter a professional title" />
       <label for="location"></label>
       <input type="text" name="location" value="Lagos, Nigeria" className="completed" />
       <label for="tel">Phone number</label>
       <input type="tel" name="tel" value="812 901 4778" className="completed" />
       <h4>Social links</h4>
       <input type="text" value="https://www.linkedin.com/in/olalekan-adebari-41907b9a/" className="completed" />
       <input type="text" placeholder="Your Facebook Profile" />
       <input type="text" placeholder="Your Twitter Profile" />
       <input type="text" value="https://github.com/horlahlekhon" className="completed" />
   </form>
</div>
  

</div>


<div className="about-me">
  <div className="about-me-links">
         <p className="link-one" onClick={removeLinksAndForm}>Cancel</p>
        <p className="link-two">Save</p>
    </div>
    <div className="about-me-suggestion">
      <p>Add 2-3 sentences about your overall professional experience</p>
    </div>
   <h2>About me <img src={blackInfoIcon} className="about-info-icon" onMouseover={aboutInfoHover} alt="about-icon" /></h2>
   <div className="pencil" onClick={displayLinksAndForm} onMouseOver={aboutMePenInfo}></div>
   <div className="pencil-info"><p>Edit</p></div>
   <form className="about-me-form">
       <textarea placeholder="Enter your overall professional experience"></textarea>
       <p>500 maximum characters.</p>
   </form>
</div>

<div className="exp">
    <p className="add-exp" onClick={displayExpForm}><span>+</span>Add</p>
  <h2>Experience</h2>
     <div className="exp-form">
  <div className="job-img"></div>
  <form>
    <label for="title">Title <span>*</span></label>

     <input type="text" name="title" className="non-empty" onClick={nonEmpty} />
     <p className="error-msg">Please provide non empty value for this field.</p>
     <label for="company">Company</label>
     <input type="text" name="company" />
     <label for="location">Location</label>
     <input type="text" name="location" />
     <label for="description">Description</label>
     <textarea name="description"></textarea>
     <label for="from">From <span>*</span></label>
     <input type="date" name="from" />
     <label for="to">To <span>*</span></label>
     <input type="date" name="to" />
     <label for="check" className="check">
      <input type="checkbox" name="check" />
      <span>I currently work here</span></label>
       <div className="exp-update-btn">
     <p className="exp-update-btn-no" onClick={removeExpForm}>Cancel</p>
     <p className="exp-update-btn-yes">Save</p>
  </div>
     
  </form>
  </div>
  <div className="evince-ng">
     <div className="evince-ng-text">
      <div className="job-img"></div>
      <div className="job-details">
        <p className="job-description">Software Developer <span>2018 - 2019</span></p>
        <p>Evince Nigeria Limited</p>
        <p>Lagos, Nigeria</p>
      </div>  
      <div className="more-icon" onMouseOver={moreIconSugg} onClick={moreEvOption}></div>
      <p id="more-icon-sugg">See options</p>
       <div className="more-options">
         <p>Edit position</p>
         <p>Delete position</p>
      </div>
        <p className="evince-ng-text-body">Built, tested, and deployed scalable, highly available and modular JVM based enterprise software using Scala, Play framework, and Akka. Designed and developed enterprise based software using Python 2 and 3 with Django, supporting one of the largest GSM telcos in Nigeria. Developed service based MDA(message driven architecture) software with Scala based Lagom microservices. Oversaw major new enhancements to existing software systems, converting production software from monolith to service-based.</p>
     </div>
  </div>
      <div className="freelancer">
     <div className="freelancer-text">
       <div className="job-img"></div>
       <div className="job-details">
        <p className="job-description">Associate Software Engineer <span>2016 - 2018</span></p>
        <p>Freelancer</p>
        <p>Lagos, Nigeria</p>
      </div>
      <div className="more-icon" onMouseOver={moreIconFreeSugg} onClick={moreFreeOption}></div>
      <p id="more-icon-sugg">See options</p>
      <div className="more-options">
         <p>Edit position</p>
         <p>Delete position</p>
      </div>
        <p className="freelancer-text-body">Developed and managed desktop applications written in Java for various SMEs. Configured, installed, and tuned Java-based systems for performance in PostgreSQL databases. Automated and implemented backup and recovery procedures for inventory management systems that resulted in high software availability. Stored, retrieved, and manipulated data for close analysis of PostgreSQL database performance across specific periods. Consulted with network engineering staff to evaluate hardware and software requirements for new system development.</p>
     </div>
      </div>
</div>

<div className="edu">
    <p className="add-edu" onClick={displayEduForm}><span>+</span>Add</p>
  <h2>Education</h2>
  <form className="edu-form">
    <label for="institute">Institution  <span>*</span></label>
     <input type="text" name="institute" className="non-ins-empty" onClick={nonInsEmpty} />
     <p className="error-ins-msg">Please provide non empty value for this field.</p>
     <label for="major">Major</label>
     <input type="text" name="major" />
     <label for="location">Location</label>
     <input type="text" name="location" />
     <label for="description">Description</label>
     <textarea name="description"></textarea>
     <label for="from">From <span>*</span></label>
     <input type="date" name="from" />
     <label for="to">To <span>*</span></label>
     <input type="date" name="to" />
     <label for="check" className="check">
      <input type="checkbox" name="check" />
      <span>I currently work here</span></label>
       <div className="edu-update-btn">
     <p className="edu-update-btn-no" onClick={removeEduForm}>Cancel</p>
     <p className="edu-update-btn-yes">Save</p>
  </div>
     
  </form>
   <div className="institute">
    <div className="edu-img"></div>
    <div className="edu-details">
     <p className="institute-name">Ogun state Institute of technology <span>2011 - 2018</span></p>
     <p>Higher national diploma, Business studies</p>
     <p>Lagos, Nigeria</p>
   </div>
   <div className="more-icon" onMouseOver={moreIconEduSugg} onClick={moreEduOption}></div>
   <p id="more-icon-sugg">See options</p>
   <div className="more-options">
         <p>Edit position</p>
         <p>Delete position</p>
      </div>
   </div>
</div>

  <div className="skillset">
   <div className="skills">       
    <div className="skills-links">
         <p className="cancel-form" onClick={removeSkillsForm}>Cancel</p>
        <p className="save-form">Save</p>
    </div>

        <p className="plus-sign" onClick={displaySkillsForm}>+</p>
      <p className="skills-header">Skills <img src={blackInfoIcon} alt="info" /></p>
      <form className="skills-form">
        <input type="text" name="search" placeholder="Skills(ex: Data analysis)" />
      </form>
   </div>

   <div className="languages">

      <div className="languages-links">
         <p className="cancel-form" onClick={removeLanguagesForm}>Cancel</p>
        <p className="save-form">Save</p>
    </div>

    <p className="plus-sign" onClick={displayLanguagesForm}>+</p>
     <p className="languages-header">Languages</p>
     <form className="languages-form">
         <input list="languages" name="languages" />
         <datalist id="languages">
    <option>Afrikaans</option>  
    <option>Amharic</option>
    <option>Arabic</option>
    <option>Armenian</option>
    <option>Azerbaijani</option>
    <option>Basque</option>
    <option>Bengali</option>
    <option>Bulgarian</option>
    <option>Catalan</option>
    <option>Chinese (Simplified)</option>
    <option>Chinese (Traditional)</option>
    <option>Croatian</option>
    <option>Czech</option>
    <option>Danish</option>
    <option>Dutch</option>
    <option>English</option>
    <option>English (UK)</option>
    <option>Estonian</option>
    <option>Finnish</option>
    <option>French</option>
    <option>French (Canada)</option>
    <option>Galician</option>
    <option>Georgian</option>
    <option>German</option>
    <option>Greek</option>
    <option>Gujarati</option>
    <option>Hebrew</option>
    <option>Hindi</option>
    <option>Hungarian</option>
    <option>Icelandic</option>
    <option>Indonesian</option>
    <option>Irish</option>
    <option>Italian</option>
    <option>Japanese</option>
    <option>Kannada</option>
    <option>Khmer</option>
    <option>Korean</option>
    <option>Lao</option>
    <option>Latvian</option>
    <option>Lithuanian</option>
    <option>Malay</option>
    <option>Malayalam</option>
    <option>Marathi</option>
    <option>Mongolian</option>
    <option>Nepali</option>
    <option>Norwegian</option>
    <option>Persian</option>
    <option>Pilipino</option>
    <option>Polish</option>
    <option>Portuguese</option>
    <option>Portuguese (Brazil)</option>
    <option>Romanian</option>
    <option>Russian</option>
    <option>Serbian</option>
    <option>Sinhala</option>
    <option>Slovak</option>
    <option>Slovenian</option>
    <option>Spanish</option>
    <option>Spanish (Mexico)</option>
    <option>Swahili</option>
    <option>Swedish</option>
    <option>Tamil</option>
    <option>Telugu</option>
    <option>Thai</option>
    <option>Turkish</option>
    <option>Ukrainian</option>
    <option>Urdu</option>
    <option>Vietnamese</option>
    <option>Welsh</option>
    <option>Zulu</option>
         </datalist>
         <select>
           <option>Beginner</option>
           <option>Intermediate</option>
           <option>Professional</option>
           <option>Native</option>
         </select>
      </form>
<img src={cancelIcon} className="cancel-icon" onClick={cancelLanguagesForm} alt="cancel-icon" />
      <p className="add-lang" onClick={addLang}>+ Add language</p>

   </div>

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

  <div className="s-prof">
<img src={profIcon} alt="prof-icon" />
<Link to="/profile">SmartProfile</Link>
  </div>

</nav>
</div>
    )

}


export default Profile