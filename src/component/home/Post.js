import React, {Component} from "react";
import GetRandomImg from "../Function";

class Post extends Component {
  render() {
    
    return (
        <div>
        { this.props.dataFromParent.map(name => (  
            <div className="post-container">
                    <div className="post-header">
                        <div className="account-sm">
                            <a href="#">
                                <img className="img-profile-sm" src="https://picsum.photos/id/1066/200"/>
                            </a>
                            <div className="account-id-container"> 
                                <a className="id" href="#">
                                    <h3>{name}</h3>
                                </a>
                                <p>Pawit Wahib</p>
                            </div>
                            <a className="btn-more"></a>
                        </div>
                    </div>
                    <div className="post-content">
                        <img src={GetRandomImg(300)}/>
                    </div>
                    <div className="post-button">
                        <div className="btn-left">
                            <a className="icon-love"/>
                            <a className="icon-comment"/>
                            <a className="icon-message"/>
                        </div>
                        <a className="icon-save"/>
                    </div>
                    <div className="post-stat">
                        <span>100k likes</span>
                    </div>
                    <div className="caption-container">
                        <div className="caption">
                            <p><span>kapaw.it</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        </div>
                    </div>
                    <div className="comment-counter">
                        <a href="#">View All 766 Comments</a>
                    </div>
                    <div className="comment-container">
                        <div className="comment">
                            <p><span>Jokowi</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                        </div>
                        <div className="comment">
                            <p><span>Ma'ruf Amin</span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's, </p>
                        </div>
                    </div>
                    <div className="timestamp">
                        <span>7 Hours Ago</span>
                    </div>
                    <div className="send-comment">
                        <input placeholder="Add a comment .." className="input-comment"/>
                        <a>Send</a>
                    </div>
                </div>
              ))}
        </div>

    );
  }
}

export default Post;