import React, {Component} from "react";
import GetRandomImg from "../Function";

class ContactContainer extends Component {
  render() {
    const names = ['James', 'Paul', 'John', 'George', 'Ringo','jono', 'joni', 'joki'];
    
    return (
      <ul className="contact">
        <li className="active">
            <a  href="#">
            <img src={GetRandomImg(400)}/>
            <div>
              <h3>User Aktif</h3>
              <p>lorem ipsum dolor sir amte consecture</p>
            </div>
            </a>
        </li>
        { names.map(name => (  
          <li>
            <a  href="#">
            <img src={GetRandomImg(400)}/>
            <div>
              <h3>{name}</h3>
              <p>lorem ipsum dolor sir amte consecture</p>
            </div>
            </a>
          </li>
        ))}
    </ul>
    );
  }
}

export default ContactContainer;