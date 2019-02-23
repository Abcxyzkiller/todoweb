import React, { Component } from 'react'
import './header.css'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
export default class home extends Component {

  render() {
    return (
      <div className="container-fluid" id="header">
        <div className="row">
          <div className="col-md-10"  >
            <i className="fas fa-tasks" style={{ marginRight: "10px" }}></i>
            <Link to="/" style={{ textDecoration: "none", color: "#4267b2;", fontSize: "30px" }}><b> TO DO LIST</b></Link>
          </div>
          {this.props.signined ?
            <div className="col-md-2" style={{ fontSize: "30px" }}>
              <Link to="/myBoard">
                <Button color='primary' style={{ marginLeft: "30px", fontSize: "20px" }}>Go to your board</Button>
              </Link>
            </div> :
            <div className="col-md-2">
              <Link to="/signinform">
                <Button style={{ fontSize: "20px", marginRight: "10px" }} color="light">Sign in</Button>
              </Link>
              <Link to="/signupform">
                <Button style={{ fontSize: "20px" }} color="light">Sign up</Button>
              </Link>
            </div>}
        </div>
      </div>
    )
  }
}
