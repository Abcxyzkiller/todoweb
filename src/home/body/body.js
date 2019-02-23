import React, { Component } from 'react'
import './body.css'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Bodypart1 from './bodypart1'
import Bodypart2 from './bodypart2'
import Bodypart3 from './bodypart3'
export default class body extends Component {
  render() {
    return (
      <div>
        <Bodypart1 signined ={this.props.signined}/>
        <Bodypart2/>
        <Bodypart3/>
      </div>
    )
  }
}
