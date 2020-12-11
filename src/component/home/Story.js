import React, {Component} from "react";
import './Home.css';
import RandomImg from '../Function'

class Story extends Component {
    
    render() {
    
    return (
    <div className="container-story">
        <button className="left"/>
            { this.props.dataFromParent.map(name => (  
                <div className="story-item">
                    <a href="#" className="has-story">
                        <img className="img-profile-lg" src={RandomImg(200)} />
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