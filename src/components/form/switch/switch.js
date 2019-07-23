import React, { Component } from "react";
import Switch from "react-switch";


class SwitchInput extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
        <Switch onChange={this.handleChange} 
        checked={this.state.checked} 
        className="react-switch"/>
    );
  }
}

export default SwitchInput

//