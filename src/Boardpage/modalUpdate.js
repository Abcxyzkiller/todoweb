import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Label, Input } from 'reactstrap'
import { TimePicker } from 'antd'
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import moment from 'moment'
import { fileToObject } from 'antd/lib/upload/utils';


const format = 'hh:mm'
class ModalUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isLoading: false,
      modal: false,
      task: "",
      start: "",
      due: "",
      note: "",
    }
  }

  fetchUpdate = () => {
    this.setState({
      isLoading: true
    })
    fetch("http://192.168.1.50:8080/api/task/gettask"+this.props.Id , {
      method: "GET",
      body: JSON.stringify({
        Name: this.state.task,
        Start: this.state.start,
        Due: this.state.due,
        Note: this.state.note,
        Id_user: Number(localStorage.getItem('Id'))
      })
    })  
        .then(res => res.json())
        .then(res => {
            console.log(res)
          this.setState({
            data: res,
            isLoading: false
          })
        })
  }
  onTask = (e) => {
    this.setState({
      task: e.target.value
    })
  }
  onStart = (e) => {
    this.setState({
      start: e.target.value
    })
  }
  onDue = (e) => {
    this.setState({
      due: e.target.value
    })
  }
  onNote = (e) => {
    this.setState({
      note: e.target.value
    })
  }
  submitOnId = (event) => {
    window.location.reload()
    const { text } = this.state;
    this.fetchAdd(text)
    

  }
  onChange = ()=>{

  }
  render() {
    
    
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.toggle}>Add Task</ModalHeader>
        <ModalBody>
          <div>
            <Form>
              <FormGroup>
                <Col sm="12" md={{ size: 8 }}>
                  <Label for="content">Task Name</Label>
                  <Input
                    type="textarea"
                    id="Content"
                    name="Content"
                    onChange={this.onTask}
                    value={this.state.task}
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm="12" md={{ size: 8 }}>
                  <Label for="object">Start</Label><br />
                  {/* <TimePicker defaultValue={moment('12:08', format)} format={format} /> */}
                  <Input
                    type="textarea"
                    id="Content"
                    name="Content"
                    onChange={this.onStart}
                    value={this.state.start}
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm="12" md={{ size: 8 }}>
                  <Label for="money">Due date</Label><br />
                  {/* <TimePicker defaultValue={moment('12:08', format)} format={format} /> */}
                  <Input
                    type="textarea"
                    id="Content"
                    name="Content"
                    onChange={this.onDue}
                    value={this.state.due}
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm="12" md={{ size: 8 }}>
                  <Label for="extra">Note</Label>
                  <Input
                    type="text"
                    id="Extra"
                    name="Extra"
                    onChange={this.onNote}
                    value={this.state.note}
                  />
                </Col>
              </FormGroup>
            </Form>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={this.submitOnId}
          >
         
            Submit
            </Button>
        </ModalFooter>
      </Modal>
    )
  }
}


export default ModalUpdate