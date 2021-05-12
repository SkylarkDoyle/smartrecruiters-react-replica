import React from "react"
import "./landing/landing.css"
import logo from "./img/smartrecruiters_bulb.png"
import textLogo from "./img/smartrecruiters_medium.png"
import track from "./img/landing-track.png"
import prof from "./img/landing-profile.png"
import search from "./img/landing-search.png"
import {Link} from "react-router-dom"

function Landing(){
    return(
    <div className="landing-wrapper">
        <nav className="landing-nav">
    		<Link to="landing.html" className="landing-logo">
    			<img src={logo} className="icon-logo" alt="logo" /> 
    			<img src={textLogo} className="text-logo" alt="text-logo" /></Link>
    		<div className="landing-nav-links">
    			<Link to="/signin" className="signin">Sign in</Link>
    		    <Link to="/signup" className="signup">Get started now</Link>
    		</div>
    	</nav>
        <header className="landing-header">
    		<h2>Welcome to SmartRecruiters</h2>
    		<p>We are here to help you during your job search!</p>
    	</header>
        <div className="landing-track">
    	<img src={track} alt="track" />
    	<div className="landing-track-text">
    		<h2>Track your application</h2>
    		<p>Check the status of all your applications to see exactly where you are in the application process. No guessing. No uncertainty. Full transparency.</p>
    		<div className="landing-track-btn">
    		<a href="sign-in.html">Manage My Applications</a>
    	</div>
    	</div>	
    </div>
    <div className="landing-profile">
  	  <img src={prof} alt="prof" />
  	  <div className="landing-profile-text">
  	  	  <h2>Create your SmartProfile</h2>
  	  	  <p>One profile. Unlimited opportunities.
 Over 5000 companies currently use SmartRecruiters to search for and hire amazing talent. Upload your resume and quickly build a profile that will get you noticed.</p>
  	  <div className="landing-profile-btn">
  	    	<a href="sign-in.html">Get Started</a>
  	    </div>
  	  </div>
  	    
  </div>
    	
<div className="landing-search">
  	  <img src={search} alt="search" />
  	  <div className="landing-search-text">
  	  	  <h2>Find your perfect job</h2>
  	  	  <p>See which jobs are a good match based on your experience. We even suggest other jobs you might be interested in based on the types of roles you search for.</p>
  	    <div className="landing-search-btn">
  	    	<a href="sign-in.html">Search For Jobs</a>
  	    </div>
  	  </div>
  </div> 
 <footer className="landing-footer">
	 <div className="landing-footer-links">
    			<Link to="sign-in.html" className="signin">Sign in</Link>
    		    <Link to="sign-up.html" className="signup">Get started now</Link>
    		</div>
  <img src={logo} alt="logo" />
</footer> 

        </div>
    )
}

export default Landing