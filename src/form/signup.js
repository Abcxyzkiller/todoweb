import React, { Component } from 'react'
import { Col, Row, FormGroup, Label, Input, Button, TabPane } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom';
import {
    Modal,
    ModalHeader,
    ModalBody,
} from "reactstrap"
class signup extends Component {

    constructor() {
        super();
        this.state = {
            modal1: false,
            modal2: false,
            modal3: false,
            isRegistering: false,
            name: "",
            number: "",
            password: "",
            passwordRewrite: "",
            data: [],
            text: ""
        }
    }
    onClick = () => {
        const { text } = this.state;
        const todoData = this.state
        this.fetchRegisration(text)
        if (todoData.password !== todoData.passwordRewrite) {
            // alert(todoData.data.Err)
            this.toggle1()
        } else if (todoData.password.length < 9) {
            // alert(todoData.data.Err)
            this.toggle2()
        } else {
            // alert(todoData.data.Success)
            this.toggle3()
            // let path = "/";
            // console.log(path)
            // this.props.history.push(path)
        }
    }
    fetchRegisration = () => {
        this.setState({
            isRegistering: true,
        })
        fetch("http://192.168.1.50:8080/api/user/register", {
            method: "POST",
            body: JSON.stringify({
                name: this.state.name,
                pass1: this.state.password,
                pass2: this.state.passwordRewrite
            })
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res,
                    isRegistering: false,
                })
            })
    }
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleNumber = (e) => {
        this.setState({
            number: e.target.value
        })
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    handlePasswordRewrite = (e) => {
        this.setState({
            passwordRewrite: e.target.value
        })
    }
    toggle1 =() =>{
        this.setState({
            modal1: !this.state.modal1
        })
    }
    toggle2 =() =>{
        this.setState({
            modal2: !this.state.modal2
        })
    }
    toggle3 =() =>{
        this.setState({
            modal3: !this.state.modal3
        })
    }
    render() {
        console.log(this.state.data)
        return (
            <TabPane tabId="2">
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="input" >Name</Label>
                            <br />
                            <Input type="text" id="input" name="input" placeholder="ABC XYZ" onChange={this.handleName} value={this.state.name}></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="number" >number</Label>
                            <br />
                            <Input type="number" id="number" name="number" placeholder="098.." onChange={this.handleNumber} value={this.state.number}></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="password" >Password</Label>
                            <br />
                            <Input type="password" id="password" name="password" placeholder="Enter your password..." onChange={this.handlePassword} value={this.state.password}></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="password" >Rewrite password</Label>
                            <br />
                            <Input type="password" id="password" name="password" placeholder="Enter your password..." onChange={this.handlePasswordRewrite} value={this.state.passwordRewrite}></Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Button onClick={this.onClick} style={{ marginTop: "10px" }} color="primary">Sign up</Button>
                <Row form>
                    <p>or you have an account?
                    <Link to="/signinform">Click here</Link>
                    </p>
                </Row>
                
                <Modal isOpen={this.state.modal1} toggle={this.toggle1}>
                    <ModalHeader toggle={this.toggle1}>ERROR</ModalHeader>
                    <ModalBody>{this.state.data.Err}</ModalBody>
                </Modal>
                <Modal isOpen={this.state.modal2} toggle={this.toggle2}>
                    <ModalHeader toggle={this.toggle2}>ERROR</ModalHeader>
                    <ModalBody>{this.state.data.Err}</ModalBody>
                </Modal>
                <Modal isOpen={this.state.modal3} toggle={this.toggle3}>
                    <ModalHeader toggle={this.toggle3}>SUCCESS</ModalHeader>
                    <ModalBody>{this.state.data.Success}</ModalBody>
                </Modal>
            </TabPane>
        )
    }
}
export default withRouter(signup)
