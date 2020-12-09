import React, {Component} from "react";
import Message from './Message';
import './Dm.css';

class MessageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {isEmpty: false};
  }

  render() {
    const check = this.state.isEmpty;
    const emptyMessage = 
      <div className="message-content">
        <span className="dm-icon"></span>
        <div className="empty-message">
          <h2>Your Messages</h2>
          <p>Send private photos and messages to a friend or group.</p>
          <button>Send Message</button>
        </div>
      </div>

    const response = check ? emptyMessage : <Message />

    return (
      response
    );
  }
}


export default MessageContainer;   