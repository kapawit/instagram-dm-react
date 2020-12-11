import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import DirectMessage from './component/DirectMessage/DirectMessage';
import Profile from './component/Profile/Profile';
import Home from './component/home/Home';

function App() {
  return (
    <div className="wrapper">
      <Router>
            <nav>
                <div className="topnav">
                    <div className="nav-brand">
                        <span className="brand"></span>
                    </div>
                    <div className="nav-search">
                        <input type="text" placeholder="Search" name="search"/>
                    </div>
                    <div className="nav-icon">
                        <Link className="sprite" to="/" id="home"></Link>
                        <Link className="sprite" to="inbox" id="inbox"></Link>
                        <Link className="sprite" to="explore" id="explore"></Link>
                        <Link className="sprite" to="activity" id="activity"></Link>   
                        <Link className="sprite dropbtn" id="profile" onClick={Dropdown}></Link>
                        <div className="dropdown-content" id="profile-dropdown">
                            <span className="triangle"></span>
                            <span className="dropdown-icon" id="dropdown-profile"></span><Link className="dropdown-link" to="profile"> Profile</Link>
                            <span className="dropdown-icon" id="dropdown-saved"></span><a className="dropdown-link" href="#"> Saved</a>
                            <span className="dropdown-icon" id="dropdown-setting"></span><a className="dropdown-link" href="#"> Settings</a>
                            <span className="dropdown-icon" id="dropdown-switch"></span><a className="dropdown-link" href="#"> Switch Accounts</a>
                            <hr/>
                            <a className="logout" href="#">Log Out</a>
                        </div>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/inbox">
                    <DirectMessage />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </Router>
    </div>
      );
}

function Dropdown() {
  document.getElementById("profile-dropdown").classList.toggle("show");
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

export default App;
