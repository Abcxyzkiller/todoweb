import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import './personalpage.css'
import {withRouter} from 'react-router-dom'
 class headerofpp extends Component {
    constructor(){
        super();
        this.state ={
            isLoading: false,
            data:[],
        }
    }
   signout=()=>{
       localStorage.clear()
       let path ='/';
      this.props.history.push(path)   
      window.location.reload()
   }
  render() {
    return (
      
         <div className="container-fluid" id="header">
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
      
    )
  }
}
export default withRouter(headerofpp)