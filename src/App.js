import React, { Component } from 'react';
import SigninForm from './pages/signinform';
import SignupForm from './pages/signupform'
import PersonalPage from './Boardpage/personalpage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      signined: false,
      userId:''
    }
  }
  getUserId = (Id) =>{
    console.log(Id);
    this.setState({userId: Id})
    localStorage.setItem("Id", Id)
    return(Id);
    
  }

  componentDidMount() {
    if(localStorage.getItem("signedIn") === "true") {
      this.setState({
        signined: true
      })
    }
  }

  Signin=()=>{
    localStorage.setItem("signedIn", true);
    this.setState({signined: true})
  
  }
  render() {
    
    return (
      <div>
        <Router>
        <div>
        
          <Route exact path="/" render={()=><HomePage signined={this.state.signined}/>}/>
          <Route exact path="/signinform" render={()=><SigninForm Signin={this.Signin} getUserId={this.getUserId}/>} />
          <Route exact path="/signupform" render={()=><SignupForm Signin={this.Signin}/>} />
          <Route exact path="/myboard" render={()=><PersonalPage Id={this.state.userId}/>}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
