import React, { Component } from 'react'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import 'antd/dist/antd.css';

export default class modal extends Component {
    constructor(props){
        super(props);
        this.state={
            modal: false
        }
    }
    
  render() {
    return (
        < Modal isOpen={this.props.modaldel} toggle={this.props.toggledel}>       
        <ModalHeader toggle={this.props.toggledel}>Delete task</ModalHeader>
        <ModalBody>Do you want to delete?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.onDelete}>
              OK
          </Button>{" "}
          <Button color="secondary" onClick={this.props.toggledel}>
            Cancel
          </Button>
      </ModalFooter>
   </Modal>
    )
  }
}
