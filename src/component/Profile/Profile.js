import React, {Component} from "react";
import Box from "./Box";
import {GetRandomImg} from "../Function";
import './profile.css';

class Profile extends Component {

    render() {        

    return (
        <div className="profile-wrapper">
            <div className="profile-content">
                <div className="profile">
                    <div className="profile-pic">
                        <img src={GetRandomImg(300)} alt="profil"/>
                    </div>
                    <div className="profile-detail">
                        <div className="profile-id">
                            <h2>Kapaw.it</h2>
                            <span className="verified"></span>
                            <a id="btnprofile" href="#">Edit Profile</a>
                            <a id="btnsetting" href="#"></a>
                        </div>
                        <div className="profile-stat">
                            <a href="#"><b>100</b> Post</a>
                            <a href="#"><b>100m</b> followers</a>
                            <a href="#"><b>100</b> following</a>
                        </div>
                        <div className="profile-desc">
                            <h3>Pawit Wahib</h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="profile-highlight">
                <li>
                    <a className="highlight" href="#"><img src={GetRandomImg(200)} alt="hoghlight"/></a>
                    <p>Highlight 1</p>
                </li>
                <li>
                    <a className="highlight" href="#"><img src={GetRandomImg(200)} alt="hoghlight"/></a>
                    <p>Highlight 1</p>
                </li>
                <li>
                    <a className="highlight" href="#"><img src={GetRandomImg(200)} alt="hoghlight"/></a>
                    <p>Highlight 1</p>
                </li>
                <li>
                    <a className="highlight" href="#"><img src={GetRandomImg(200)} alt="hoghlight"/></a>
                    <p>Highlight 1</p>
                </li>
                <li>
                    <a className="highlight" href="#"><img src={GetRandomImg(200)} alt="hoghlight"/></a>
                    <p>Highlight 1</p>
                </li>
                <li>
                    <a className="highlight" href="#"><img src={GetRandomImg(200)} alt="hoghlight"/></a>
                    <p>Highlight 1</p>
                </li>
            </ul>
            <hr/>
            <div className="profile-tab">
                <div className="menu-tab">
                    <a className="active" href="#"><span id="posts"></span>POSTS</a>
                    <a href="#"><span id="igtv"></span>IGTV</a>
                    <a href="#"><span id="saved"></span>SAVED</a>
                    <a href="#"><span id="taged"></span>TAGED</a>
                </div>
            </div>
            <Box/>
        </div>
    );
  }
}
export default Profile;