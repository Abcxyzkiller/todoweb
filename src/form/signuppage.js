import React, { Component } from 'react'
import { Row,  Form, Nav, NavItem, NavLink, TabContent } from 'reactstrap'
import './form.css';
import classnames from 'classnames'
import Signin from './signin'
import Signup from './signup'

export default class form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "2"
        }
    }
    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState(
                { activeTab: tab }
            )
        }
    }
    render() {
        return (
            <div>
                <Form className="center">
                    <Row form>
                        <Nav tabs>
                            <NavItem>
                                <NavLink  style={{fontSize: "25px"}} className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}>
                                    Sign in
                    </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav tabs>
                            <NavItem>
                                <NavLink style={{fontSize: "25px"}} className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}>
                                    Sign up
                    </NavLink>
                            </NavItem>
                        </Nav>
                    </Row>
                    <TabContent style={{paddingTop: "10px"}} activeTab={this.state.activeTab}>
                        <Signin Signin={this.props.Signin} activeTab={this.state.activeTab} />
                        <Signup Signin={this.props.Signin} activeTab={this.state.activeTab} />
                    </TabContent>
                </Form>
            </div>
        )
    }
}
