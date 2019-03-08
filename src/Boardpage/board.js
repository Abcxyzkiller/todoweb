import React, { Component } from 'react'
import { Table, Button, Card, CardGroup } from 'reactstrap'
import ModalAdd from './modaladd'
import ModalUpdate from './modalUpdate'
import "./board.css"
import PropTypes from 'prop-types'
export default class board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      modal: false,
      modaldel: false,
      modalupdate: false,
      data: [],
      dataupdate: {},
      isUpdate: false,
    }
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }
  toggleUpdate = (Id) => {
    localStorage.setItem("taskId", Id)
    this.setState({
      modalupdate: !this.state.modalupdate,
      isUpdate: true
    })
    console.log("2")
    this.fetchUpdate(Id)
  }
  toggledel = () => {
    this.setState({ modaldel: !this.state.modaldel })
  }
  onAdd = () => {

  }
  //call api get all
  fetchAlltask = () => {
    this.setState({
      isLoading: true
    });

    fetch("http://192.168.1.53:8080/api/task/getalltasks/" + localStorage.getItem('Id'), {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => {

        this.setState({
          data: response,
          //id: response.Id,
          isLoading: false
        });
      });
  };
  componentDidMount() {
    this.fetchAlltask()
  }
  //call api delete
  fetchDelete = (Id) => {
    this.setState({
      isLoading: true,
    })
    fetch("http://192.168.1.53:8080/api/task/delete/" + Id, {
      method: "Delete"
    })
      .then(() => {
        this.setState(({ data }) => ({
          data: this.state.data.filter(data => data.Id !== Id)
        }))
      })
  }
  onDelete = (Id) => {
    this.fetchDelete(Id)
    this.setState({ modaldel: !this.state.modaldel });
    console.log(Id)
  }
  //call api update
  fetchUpdate = (Id) => {
    this.setState({
      isLoading: true
    })
    fetch("http://192.168.1.53:8080/api/task/gettask/" + Id, {
      method: "GET",
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          dataupdate: res,
          isLoading: false
        })

      })
  }


  render() {
    return (
      <div style={{ marginTop: "7.5%" }}>
        <div className="col-md-10"></div>
        <div className="col-md-2" style={{ margin: "1%"}}>
          <Button onClick={this.toggle}>
            + New
        </Button>
          <ModalAdd toggle={this.toggle} modal={this.state.modal} Id={this.props.Id} />
        </div>
        
<CardGroup>
        {this.state.data && this.state.data.map((item) =>
          <article className="cardstyle" Id={item.Id}>
          <input type="checkbox"/>
            <div>
            <i style={{ fontSize: "15px", paddingRight: "10px" }} className="fas fa-thumbtack"/>{item.Name}</div>
            <div>
              <i style={{ fontSize: "15px", paddingRight: "10px" }} className="fas fa-hourglass-start"></i>
              {item.Start}
            </div>
            <div>
              <i style={{ fontSize: "15px",paddingRight: "10px" }} className="fas fa-hourglass-end"></i>
              {item.Due}
            </div>
            <i style={{ fontSize: "15px",paddingRight: "10px" }} className="fas fa-sticky-note"></i>
            Note
            <div>
             {item.Note}</div>
             <div style={{paddingLeft: "1px"}}>
            <Button color='link' onClick={() => { this.toggleUpdate(item.Id) }}>
              <i className="fas fa-edit" style={{ fontSize: "20px" }}></i>
            </Button>
            {console.log("1")}
            <ModalUpdate             
               name = {this.state.dataupdate.Name} 
               Start={this.state.dataupdate.Start} 
               Due={this.state.dataupdate.Due} 
               Note={this.state.dataupdate.Note}
               toggle={this.toggleUpdate} 
               modal={this.state.modalupdate}/>
            <Button onClick={event => this.onDelete(item.Id)} Id={item.Id} color='link'>
              <i className="fas fa-trash-alt" style={{ fontSize: "20px" }}></i>
            </Button>
            </div>
          </article>
        )}
</CardGroup>
      </div>
    )
  }
}