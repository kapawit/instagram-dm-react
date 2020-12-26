import React, {Component} from "react";
import '../assets/css/Home.css';
import {GetRandomImg} from './Function'

class Story extends Component {
    
    render() {
    
    return (
    <div className="container-story">
        <button className="left"/>
            { this.props.dataFromParent.map(name => (  
                <div className="story-item">
                    <a href="#" className="has-story">
                        <img className="img-profile-lg" src={GetRandomImg(200)} />
                    </a>
                    <p>{name}</p>
                </div>
            ))}
        <button className="right"/>
    </div>  
                        
    );
  }
}

export default Story;