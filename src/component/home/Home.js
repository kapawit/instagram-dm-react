import React, {Component} from "react";
import './Home.css';
import RandomImg from '../Function'
import Post from './Post';
import Story from './Story';
import Suggestion from './Suggestion';

class Home extends Component {
    
    render() {  
    
    const names = ['James', 'Paul', 'John', 'George', 'Ringo','jono', 'joni','susi'];
    
    return (
        <div className="disable-scroll">
            <div className="content-wrapper">
                <div className="home-wrapper">
                    <div className="post-wrapper">
                        <Story dataFromParent = {names} />
                        <Post dataFromParent = {names}/>
                    </div>
                    <div className="side">

                        <div className="account-md">
                            <a href="#">
                                <img className="img-profile-md" src={RandomImg(200)}/>
                            </a>
                            <div className="account-id-container"> 
                                <a href="#">
                                    <h3>Kapaw.it</h3>
                                </a>
                                <p>Pawit Wahib</p>
                            </div>
                        </div>

                        <div className="header-suggestion">
                            <h3>Suggestion For You</h3>
                            <a href="#">See All</a>
                        </div>
                        <div className="suggestion">

                            <Suggestion dataFromParent = {names}/>

                            <footer>
                                <div className="side-footer">
                                    <ul>
                                        <a href="#"><li>About</li></a>
                                        <a href="#"><li>Help</li></a>
                                        <a href="#"><li>Press</li></a>
                                        <a href="#"><li>API</li></a>
                                        <a href="#"><li>jobs</li></a>
                                        <a href="#"><li>Privacy</li></a>
                                        <a href="#"><li>Terms</li></a>
                                        <a href="#"><li>Locations</li></a>
                                        <a href="#"><li>Top Account</li></a>
                                        <a href="#"><li>Hastags</li></a>
                                        <a href="#"><li>Language</li></a>
                                    </ul>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;