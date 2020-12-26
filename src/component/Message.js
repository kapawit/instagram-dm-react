import React, {Component} from "react";

class Message extends Component {
  render() {
    return (
        <div className="message-container">
            <div className="header-message">
                <div className="img-profile">
                    <img src="https://picsum.photos/id/1066/200"/>
                    <div>
                        <h3>User</h3>
                        <p>Active today</p>
                    </div>
                </div>     
                <button class="info"></button>
            </div>
            <div className="chat-box">
                <div className="chat-me">  
                    <p>ini chat dari sendiri nlasn aldknas alsdknasld laskdnlas aslkndlaskd </p>
                </div>
                <div className="datetime">
                    <span>12 November 2020</span>
                </div>
                <div className="chat-other"> 
                    <img src="https://picsum.photos/id/1066/200"/>
                    <p>ini chat orang lain alskdna dlkasjd aslkdj asdjlaksd alskdjaskdln aslkdan sdkl dalksn</p>
                </div>
                <div className="chat-me">  
                    <p>ini chat dari sendiri nlasn aldknas alsdknasld laskdnlas aslkndlaskd </p>
                </div>
                <div className="chat-other"> 
                    <img src="https://picsum.photos/id/1066/200"/>
                    <p>ini chat orang lain alskdna dlkasjd aslkdj asdjlaksd alskdjaskdln aslkdan sdkl dalksn</p>
                </div>
                <div className="chat-me">  
                    <p>ini chat dari sendiri nlasn aldknas alsdknasld laskdnlas aslkndlaskd </p>
                </div>
                <div className="chat-other"> 
                    <img src="https://picsum.photos/id/1066/200"/>
                    <p>ini chat orang lain alskdna dlkasjd aslkdj asdjlaksd alskdjaskdln aslkdan sdkl dalksn</p>
                </div>
                <div className="chat-me">  
                    <p>ini chat dari sendiri nlasn aldknas alsdknasld laskdnlas aslkndlaskd </p>
                </div>
                <div className="chat-other"> 
                    <img src="https://picsum.photos/id/1066/200"/>
                    <p>ini chat orang lain alskdna dlkasjd aslkdj asdjlaksd alskdjaskdln aslkdan sdkl dalksn</p>
                </div>
                <div className="chat-me">  
                    <p>ini chat dari sendiri nlasn aldknas alsdknasld laskdnlas aslkndlaskd </p>
                </div>
                <div className="chat-other"> 
                    <img src="https://picsum.photos/id/1066/200"/>
                    <p>ini chat orang lain alskdna dlkasjd aslkdj asdjlaksd alskdjaskdln aslkdan sdkl dalksn</p>
                </div>
                <div className="chat-me">  
                    <p>ini chat dari sendiri nlasn aldknas alsdknasld laskdnlas aslkndlaskd </p>
                </div>
            </div>
            <div className="input-message">
                <div className="border">
                    <span className="emoji"/>
                    <input placeholder="Messages..." type="text"/>
                    <span className="image"/>
                    <span className="heart"/>
                </div>
            </div>
        </div>
    );
  }
}

export default Message;   