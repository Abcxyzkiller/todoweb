import React, { Component } from 'react'
import './body.css'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
export default class body extends Component {
    render() {
        return (
            <div id="body" style={{ backgroundColor: "white" }} className="row">
                <div className="col-md-5">
                <img className="img2" src="https://cdn-images-1.medium.com/max/1600/0*bP0GbIkuUFhxhzoo"/>
                </div>
                <div style={{ fontSize: "25px" }} className="col-md-7">
                    <p style={{ margin: "10%", marginLeft: "16%", fontSize: "40px" }}>
                        <span style={{ fontSize: "30px", color: "#858585" }}>Simple</span><br />
                        <b>It's never been easier to<br />organized your life</b>
                        <p>Organize your tasks, lists and reminders in one <br />
                            easy to-do app. Any.do syncs seamlessly <br />
                            across all of your devices, making your to-do list<br /> accessible everywhere.</p>
                    </p>
                </div>
            </div>
        )
    }
}
