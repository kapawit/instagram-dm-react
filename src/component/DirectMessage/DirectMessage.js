import React, {Component} from "react";
import MessageContainer from "./MessageContainer";
import ContactContainer from "./ContactContainer";
import './DirectMessage.css';
import RandomImg from '../../component/RandomImg'


class DirectMessage extends Component {

  render() {
    return (
        <div className="content-wrapper">
            <div className="message-box">
                <div className="contact-list">
                    <div className="account-list">
                        <div className="account-switch">
                            <h2>Kapaw.it</h2>
                            <button/>
                        </div>
                        <button className="icon-write"/>
                    </div>
                    <div className="menu-tab">
                        <button className="active">PRIMARY</button>
                        <button>GENERAL</button>
                    </div>
                    <ContactContainer/>  
                </div>
                <MessageContainer/>
            </div>
        </div>
    );
  }
}
export default DirectMessage;