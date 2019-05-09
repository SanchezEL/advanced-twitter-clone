import React, { Component } from 'react'
import './navComponent.css'

export default class index extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div className="nav">
        <div className ="nav-left">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Moments</a>
            </li>
            <li>
              <a href="#">Notifications</a>
            </li>
            <li>
              <a href="#">Messages</a>
            </li>
          </ul>
        </div>
        <div className ="nav-middle">
          <img src="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" width="50px" height="50px"></img>
        </div>
        <div className="nav-right">
          <input type="text"></input>
        </div>
      </div>
    )
  }
}
