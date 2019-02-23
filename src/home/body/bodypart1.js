import React, { Component } from 'react'
import './body.css'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
export default class body extends Component {
  render() {
    return (
      <div id="body" className="row">
        <div style={{ fontSize: "25px" }} className="col-md-7">
          <p style={{ margin: "15%", marginLeft: "20%", fontSize: "45px" }}>
            <b>YOUR BUSY LIFE<br /> DESERVES THIS.</b>
            <p>Todolist is an award-winning app used by<br /> millions of people to stay organized and<br /> get more done.</p>
          {this.props.signined? null: <div>
            <Link to="/signinform">
              <Button color="primary" style={{ margin: "10px", padding: "5px 30px", boxShadow: "0 11px 26px 0 rgba(0,0,0,0.23)" }}>
                Sign In
            </Button>
            </Link>
            <Link to="/signupform">
              <Button color="primary" style={{ margin: "10px", padding: "5px 30px", boxShadow: "0 11px 26px 0 rgba(0,0,0,0.23)" }}>
                Sign Up
            </Button>
            </Link>
            </div>}
          </p>
        </div>
        <div className="col-md-5">
          <img className="img1" src="https://www.any.do/v4/images/translations/en/index/group-6@2x.png"/>
        </div>
      </div>
    )
  }
}
