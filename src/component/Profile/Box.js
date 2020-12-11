import React, {Component} from "react";
import {GetRandomImg,GetNumber} from "../Function";

import './profile.css';

class Box extends Component {

    render() {        
    const num = GetNumber(9);
    return (
        <div className="profile-galery">
            <ul>
                {num.map((i) => (
                <li>
                    <a href="#">
                        <img src={GetRandomImg(400)} alt="img"/>
                        <div className="img-overlay">
                            <div className="img-stat">
                                <span className="like"></span>{i}
                                <span className="comment"></span> 20k
                            </div>
                        </div>
                    </a>
                </li>
                ))}
            </ul>
        </div>
        );
    }
}
export default Box;