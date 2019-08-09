import React, { Component } from 'react'
//import axios from 'axios'
import api2 from '../../services/api2'

export default class CreateForm extends Component {

  componentDidMount() {
    this.loadInputs();
  }

  loadInputs = async () => {
    const response = await api2.get('/resident.json')

    console.log(response)

    
  };

  render() {

    return(
      <div>teste basico</div>
      // <h1>teste {this.state.inputs.length}</h1>
    )
  }
}