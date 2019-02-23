import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'
import ModalAdd from './modaladd'
import ModalUpdate from './modalUpdate'

export default class board extends Component {
  constructor(props) {
    super(props)
    this.state = {
    isLoading: false,
     modal: false,
     modaldel: false,
     modalupdate: false,
     data: []
    }
  }
  toggle=()=>{
    this.setState({modal: !this.state.modal})
}
toggleUpdate=()=>{
  this.setState({modalupdate: !this.state.modalupdate})
}
toggledel=()=>{
  this.setState({modaldel: !this.state.modaldel})
}
  onAdd =()=>{
       
  }
  //call api get all
  fetchAlltask = () => {
    this.setState({
        isLoading: true
    });
    
    fetch("http://192.168.1.50:8080/api/task/getalltasks/"+ localStorage.getItem('Id'), {
        method: 'GET'
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            this.setState({
                data: response,
                //id: response.Id,
                isLoading: false
            });
        });
        console.log(this.state.data)
};
componentDidMount(){
  this.fetchAlltask()
}
    //call api delete
         fetchDelete =(Id) => {
         this.setState({
             isLoading: true,
         })
         fetch("http://192.168.1.50:8080/api/task/delete/" + Id, {
             method: "Delete"
         })
             .then(() =>{
                 this.setState(({data}) =>({
                     data: this.state.data.filter(data => data.Id !== Id)
                 }))
             }) 
     }      
     onDelete =(Id) =>{
        this.fetchDelete(Id)
        this.setState({modaldel: !this.state.modaldel});
        console.log(Id)
     } 
     
     /*onShow =() =>{
       return(
         this.state.data.map(item=>)
       )
     }*/
  render() {
    
    return (
      <div className="row" style={{ marginTop: "7.5%", textAlign: "center" }}>
        {/* <div className="col-md-2" style={{fontSize: "20px", paddingTop: "20px"}}>          
            <i className="far fa-check-circle" style={{marginRight: "10px"}}></i>           
            <b>MY LISTS</b>           
        </div>
        <div className="col-md-10" style={{backgroundColor: "#dfe1e2",  paddingTop: "20px", height: "100%"}}>
            xyz
        </div> */}   
        <div className="col-md-10"></div>
        <div className="col-md-2" style={{marginBottom: "20px"}}>
          <Button onClick={this.toggle}>
            Add Task
        </Button>
        <ModalAdd toggle={this.toggle} modal={this.state.modal} Id={this.props.Id}/>
        </div>
        <Table>
          <thead>
            <tr>
              <th><center>Job Check</center></th>
              <th><center>Job</center></th>
              <th><center>Day Begin</center></th>
              <th><center>Deadline</center></th>
              <th><center>note</center></th>
              <th><center>Update</center></th>
              <th><center>Delete</center></th>
            </tr>
          </thead>
          <tbody>
          {this.state.data && this.state.data.map((item)  =>
            <tr Id={item.Id}>
            
              <td><center><input type="checkbox"></input></center></td>
              <td><center>{item.Name}</center></td>
              <td><center>{item.Start}</center></td>
              <td><center>{item.Due}</center></td>
              <td><center>{item.Note}</center></td>
              <td><Button color='link' onClick={this.toggleUpdate}>
                <i className="fas fa-edit" style={{ fontSize: "25px" }}></i>
              </Button>
              <ModalUpdate toggle={this.toggleUpdate} modal={this.state.modalupdate}/>
              </td>
              <td><Button onClick={event=> this.onDelete(item.Id)} Id={item.Id}color='link'>
                <i className="fas fa-trash-alt" style={{ fontSize: "25px" }}></i>
                
              </Button>
              
              </td>
            </tr>
            )}
             
                            
                         
          </tbody>
        </Table>
      </div>

    )
  }
}
