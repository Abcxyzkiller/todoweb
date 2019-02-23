import React, { Component } from 'react'
import Board from './board'
import './personalpage.css'
import Headerofpp from './headerofpp'
import { withRouter } from 'react-router-dom'

class personalpage extends Component {
    signout = () => {
        localStorage.clear()
        // window.location.reload()
        let path = '/';
        setInterval(() => { this.props.history.push(path) }, 10)
    }
    render() {
        return (
            <div>
                <Headerofpp />
                <Board Id={this.props.Id}/>
                
            </div>
        )
    }
}
export default withRouter(personalpage)