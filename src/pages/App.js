import React from "react"
import {BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"


//Pages
import Landing from "./Landing";
import Signup from "./Signup";
import Signin from "./Signin";
import Forgotpwd from "./Forgotpwd"
import Home from "./Home"
import Profile from "./Profile"
import Search from "./Search"
import Setting from "./Setting"
import Job from "./Job"
function App(){
    return(
   <Router>
          <Switch>
  <Route exact path="/" component={Landing} />
  <Route exact path="/signup" component={Signup} />
  <Route exact path="/signin" component={Signin} />
  <Route exact path="/forgotpwd" component={Forgotpwd} />
  <Route exact path="/home" component={Home} />
  <Route exact path="/profile" component={Profile} />
  <Route exact path="/search" component={Search} />
  <Route exact path="/setting" component={Setting} />
  <Route exact path="/job" component={Job} />
  </Switch>
        </Router>
    
    )
}

export default App