import React, { Component } from 'react'
import { Button, Col, Row, FormGroup, Label, Input, TabPane } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap"
import PropTypes from 'prop-types'
class signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalSuccess: false,
            modalFalse: false,
            signined: false,
            name: "",
            password: "",
            data: [],
            text: ""
        }
    }
    onClick = (Id) => {
        const { text } = this.state
        this.fetchSignin(text)
        
    }
    fetchSignin = () => {
        fetch("http://192.168.1.27:8080/api/user/login", {
            method: "Post",
            headers: {
                //Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.name,
                pass: this.state.password,
            })
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res
                })
                if (this.state.data.Id) {
                    this.toggleSuccess()
                } else {
                    this.toggleFalse()
                }
            })
    }
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    toggleSuccess = () => {
        this.setState({
            modalSuccess: !this.state.modalSuccess
        })
    }
    toggleFalse = () => {
        this.setState({
            modalFalse: !this.state.modalFalse
        })
    }
    Continue = (Id) =>{
        this.props.Signin()
        let path = "/";
        this.props.history.push(path)
        console.log(Id);
        this.props.getUserId(Id);
    }
    
    render() {
        console.log(this.state.data.Id)
        return (
            <TabPane tabId="1">
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="name" >Name</Label>
                            <br />
                            <Input type="name" id="name" name="name" placeholder="Enter your name..." onChange={this.handleName} value={this.state.value}></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <br />
                            <Input type="password" id="password" name="password" placeholder="Enter your password..." onChange={this.handlePassword} value={this.state.value}></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Button onClick={ this.onClick}  style={{ marginTop: "10px" }} color="primary">Sign in</Button>
                <Modal isOpen={this.state.modalSuccess} toggle={this.toggleSuccess}>
                    <ModalHeader toggle={this.toggleSuccess}>Login Success</ModalHeader>
                    <ModalBody>Welcome {this.state.data.Name}</ModalBody>
                    <ModalFooter><Button onClick={event=> this.Continue(this.state.data.Id)}>Continue</Button></ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modalFalse} toggle={this.toggleFalse}>
                    <ModalHeader toggle={this.toggleFalse}>Fail</ModalHeader>
                    <ModalBody>Please check again your password or name</ModalBody>
                </Modal>
            </TabPane>
        )
    }
}
signin.propTypes={
    email: PropTypes.element.isRequired
}
export default withRouter(signin)