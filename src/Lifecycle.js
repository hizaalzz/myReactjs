import React, { Component } from 'react'
import Sublifecycle from './Sublifecycle';

export default class Lifecycle extends Component {
 //Daur Hidup rconst
 constructor(props) {
   super(props)
 
   this.state = {
      makanan : 'Bakso',
      data: {},
      tampilHalamanSub: false,
   };
 }
 
 //JSON Placeholder
 //Mounting API
 componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then((json) => {
        this.setState({
            data : json
        })
      })
 }
//Willunmounting
 ubahMakanan(value) {
    this.setState({
        makanan : value
    })
 }

  render() {
    //console.log("Data : ", this.state.data);
    return (
      <div>
        <h2>Hallo Lifecycle Mounting</h2>
        <h2>{this.state.data.title}</h2>

        <h2>Hallo Lifecycle DidMounting</h2>
        <h2>{this.state.makanan}</h2>
        {this.state.tampilHalamanSub && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)}/>}
        <button onClick={()=>this.setState({tampilHalamanSub: !this.state.tampilHalamanSub})}>Tampil Halaman Sub</button>
      </div>
    )
  }
}
