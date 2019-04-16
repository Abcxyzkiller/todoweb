import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Col, Label, Input } from 'reactstrap'
import { TimePicker } from 'antd'
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import moment from 'moment'
import { fileToObject } from 'antd/lib/upload/utils';
import PropTypes from 'prop-types'

const format = 'hh:mm'
class ModalUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      isLoading: false,
      modal: false,   
      getValuesFromProps: true
    } 
    console.log(this.state.task)
  }
componentDidUpdate(){
  if(this.state.getValuesFromProps && this.props.name){
  this.setState({
  task: this.props.name,
  start: this.props.Start,
  due: this.props.Due,
  note: this.props.Note,
  getValuesFromProps: false
})

  }
}
  fetchUpdate = () => {
    this.setState({
      isLoading: true
    })
    fetch("http://192.168.1.27:8080/api/task/update", {
      method: "POST",
      body: JSON.stringify({
        Name: this.state.task,
        Start: this.state.start,
        Due: this.state.due,
        Note: this.state.note,
        Id: Number(localStorage.getItem('taskId')),
        Id_user: Number(localStorage.getItem('Id')),
      })
    })  
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: res,
            isLoading: false
          })
        })
  }
  onTask = (e) => {
    this.setState({
      isEditting: true,
      task: e.target.value
    })
  }
  onStart = (e) => {
    this.setState({
      isEditting: true,
      start: e.target.value
    })
  }
  onDue = (e) => {
    this.setState({
      isEditting: true,
      due: e.target.value
    })
  }
  onNote = (e) => {
    this.setState({
      isEditting: true,
      note: e.target.value
    })
  }
  submitOnId = () => {
    window.location.reload()
    const { text } = this.state;
    this.fetchUpdate()
  }
  isActive=()=>{
    if(this.state.task&&this.state.start&&this.state.due){
     return true 
    }
  }
  render() {
   
    console.log(this.props.name)
    console.log(this.state.task)
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
                    onChange={(e)=>this.onTask(e)}
                    value={this.state.task}
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm="12" md={{ size: 8 }}>
                  <Label for="object">Start</Label><br />
                  <Input
                    type="textarea"
                    id="Content"
                    name="Content"
                    onChange={(e)=>this.onStart(e)}
                    value={this.state.start}
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col sm="12" md={{ size: 8 }}>
                  <Label for="money">Due date</Label><br />
                  <Input
                    type="textarea"
                    id="Content"
                    name="Content"
                    onChange={(e)=>this.onDue(e)}
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
                    onChange={(e)=>this.onNote(e)}
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
            active={this.isActive()}
          >   
            Submit
            </Button>
        </ModalFooter>
      </Modal>
    )
  }
}
ModalUpdate.propTypes={
  task: PropTypes.element.isRequired,
  start: PropTypes.element.isRequired,
  due: PropTypes.element.isRequired
}

export default ModalUpdate