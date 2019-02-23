import React, { Component } from 'react'
import './body.css'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
export default class body extends Component {
  render() {
    return (
      <div id="body" className="row">
        <div style={{ fontSize: "25px" }} className="col-md-7">
          <p style={{ margin: "10%", marginLeft: "16%", fontSize: "40px" }}>
                        <span style={{ fontSize: "30px", color: "#858585" }}>TRUSTWORTHY</span><br />
                        <b>Remind me to...</b>
                        <p>Set reminders to make sure important things  <br />
                        don’t slip away. With powerful one-time,  <br />
                        recurring and location based reminders, you <br /> 
                        can be sure critical things don’t get forgotten..</p>
                    </p>
        </div>
        <div className="col-md-5">
          <img className="img3" src="https://www.any.do/v4/images/translations/en/index/reminders@2x.png"/>
        </div>
      </div>
    )
  }
}
