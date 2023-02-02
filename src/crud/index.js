import React, { Component } from 'react'
import Formulir from './Formulir'
import NavbarComponent from './NavbarComponent'
import Tabel from './Tabel'

export default class Crud extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/>
        <div className='container mt-4'>
          <h2>myCRUD Reactjs</h2>
            <Tabel/>
            <br></br>
            <Formulir/>
        </div>
      </div>
    )
  }
}
