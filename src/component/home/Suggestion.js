import React, {Component} from "react";
import './Home.css';
import {GetRandomImg} from "../Function";

class Home extends Component {
    
    render() {  
    
    
    return (
            <div>
                { this.props.dataFromParent.slice(0, 5).map(name => (  
                <div className="account-sm">
                    <a href="#">
                        <img className="img-profile-sm" src={GetRandomImg(200)}/>
                    </a>
                    <div className="account-id-container"> 
                        <a className="id" href="#">
                            <h3>{name}</h3>
                        </a>
                        <p>Pawit Wahib</p>
                    </div>
                    <a className="btn-follow-sm">
                        Follow
                    </a>
                </div>     
                ))}
            </div>
        );
    }
}

export default Home;