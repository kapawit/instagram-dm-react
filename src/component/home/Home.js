import React, {Component} from "react";
import './Home.css';
import RandomImg from '../../component/RandomImg'
import Post from './Post';
class Home extends Component {
    
    render() {
    const names = ['James', 'Paul', 'John', 'George', 'Ringo','jono', 'joni'];
    
    
    return (
        <div className="disable-scroll">
            <div className="content-wrapper">
                <div className="home-wrapper">
                    <div className="post-wrapper">
                        <div className="container-story">
                            {/* item story */}
                            { names.map(name => (  
                                <div className="story-item">
                                    <a href="#" className="has-story">
                                        <img className="img-profile-lg" src={RandomImg(200)} />
                                    </a>
                                    <p>{name}</p>
                                </div>
                            ))}
                            {/* item story */}
                        </div>  
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
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

                            <div className="account-sm">
                                <a href="#">
                                    <img className="img-profile-sm" src="https://picsum.photos/id/1066/200"/>
                                </a>
                                <div className="account-id-container"> 
                                    <a className="id" href="#">
                                        <h3>Kapaw.it</h3>
                                    </a>
                                    <p>Pawit Wahib</p>
                                </div>
                                <a className="btn-follow-sm">
                                    Follow
                                </a>
                            </div>
                            <div className="account-sm">
                                <a href="#">
                                    <img className="img-profile-sm" src="https://picsum.photos/id/1066/200"/>
                                </a>
                                <div className="account-id-container"> 
                                    <a className="id" href="#">
                                        <h3>Kapaw.it</h3>
                                    </a>
                                    <p>Pawit Wahib</p>
                                </div>
                                <a className="btn-follow-sm">
                                    Follow
                                </a>
                            </div>
                            <div className="account-sm">
                                <a href="#">
                                    <img className="img-profile-sm" src="https://picsum.photos/id/1066/200"/>
                                </a>
                                <div className="account-id-container"> 
                                    <a className="id" href="#">
                                        <h3>Kapaw.it</h3>
                                    </a>
                                    <p>Pawit Wahib</p>
                                </div>
                                <a className="btn-follow-sm">
                                    Follow
                                </a>
                            </div>
                            <div className="account-sm">
                                <a href="#">
                                    <img className="img-profile-sm" src="https://picsum.photos/id/1066/200"/>
                                </a>
                                <div className="account-id-container"> 
                                    <a className="id" href="#">
                                        <h3>Kapaw.it</h3>
                                    </a>
                                    <p>Pawit Wahib</p>
                                </div>
                                <a className="btn-follow-sm">
                                    Follow
                                </a>
                            </div>
                            <div className="account-sm">
                                <a href="#">
                                    <img className="img-profile-sm" src="https://picsum.photos/id/1066/200"/>
                                </a>
                                <div className="account-id-container"> 
                                    <a className="id" href="#">
                                        <h3>Kapaw.it</h3>
                                    </a>
                                    <p>Pawit Wahib</p>
                                </div>
                                <a className="btn-follow-sm">
                                    Follow
                                </a>
                            </div>
                            
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

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Home;