import React, { Component } from 'react'
import Board from '../home/body/board'
import { Link } from 'react-router-dom'
import './boardpage.css'
import {Button} from 'reactstrap'
import {withRouter} from 'react-router-dom'

 class boardpage extends Component {
    signout=()=>{
        localStorage.clear()
        window.location.reload()
        let path ='/';
       setInterval(()=>{this.props.history.push(path)}, 10)
        
       
    }

    render() {
        return (
            <div>
                <div className="container-fluid " id="header">
                    <div className="row">
                        <div className="col-md-10"  >
                            <i className="fas fa-tasks" style={{ marginRight: "10px" }}></i>
                            <Link to="/" style={{ textDecoration: "none", color: "#4267b2;", fontSize: "30px" }}>
                                <b> TO DO LIST</b>
                            </Link>
                        </div>
                        <div className="col-md-2" style={{ fontSize: "30px" }}>
                            <Link to="/">
                                <i className="fas fa-user header-icon" style={{ marginLeft: "80px", fontSize: "35px" }}></i>
                            </Link>                        
                            <Button onClick={this.signout} color="link">
                                <i className="fas fa-sign-out-alt header-icon" style={{ marginLeft: "20px", fontSize: "35px" }}></i>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Board />
                </div>
            </div>
        )
    }
}
export default withRouter(boardpage)