import React, { Component } from 'react'
import './form.css'
import Signuppage from '../form/signuppage'
import { Link } from 'react-router-dom'
export default class form extends Component {
  render() {
    return (
      <div className="background">
        <Link to="/" style={{textDecoration: "none"}}>
          <p style={{paddingTop: "15px", textAlign: "center", fontSize: "40px", color: "white" }}><b>TO DO LIST</b></p>
        </Link>
        <Signuppage Signin={this.props.Signin}/>
      </div>
    )
  }
}
