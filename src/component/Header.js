import React, {Component} from "react";
import './Dm.css';

class Header extends Component {
    dropdown = () => {
        console.log("test");
        document.getElementById("profile-dropdown").classList.toggle("show");
    }
    
  render() {
    return (
        <nav>
            <div className="topnav">
                <div className="nav-brand">
                    <span className="brand"></span>
                </div>
                <div className="nav-search">
                    <input type="text" placeholder="Search" name="search"/>
                </div>
                <div className="nav-icon">
                    <a className="sprite" href="#" id="home"></a>
                    <a className="sprite" href="#" id="inbox"></a>
                    <a className="sprite" href="#" id="explore"></a>
                    <a className="sprite" href="#" id="activity"></a>   
                    <a className="sprite dropbtn" href="#" id="profile" onClick={this.dropdown}></a>
                    <div className="dropdown-content" id="profile-dropdown">
                        <span className="triangle"></span>
                        <span className="dropdown-icon" id="dropdown-profile"></span><a className="dropdown-link" href="#"> Profile</a>
                        <span className="dropdown-icon" id="dropdown-saved"></span><a className="dropdown-link" href="#"> Saved</a>
                        <span className="dropdown-icon" id="dropdown-setting"></span><a className="dropdown-link" href="#"> Settings</a>
                        <span className="dropdown-icon" id="dropdown-switch"></span><a className="dropdown-link" href="#"> Switch Accounts</a>
                        <hr/>
                        <a className="logout" href="#">Log Out</a>
                    </div>
                </div>
            </div>
        </nav>
        );
    }
}
export default Header;