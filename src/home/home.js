import React, { Component } from 'react'
import Header from './header/header'
import Body from './body/body'

export default class home extends Component {
  render() {
    return (
      <div>
        <Header signined ={this.props.signined}/>
        <Body signined ={this.props.signined} />
      </div>
    )
  }
}
