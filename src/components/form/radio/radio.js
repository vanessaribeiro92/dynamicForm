import React, { Component } from "react";
import Label from "../label/index";

class RadioButton extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.setState({ selectedValue: value });
  }
  render() {
    return (
      <React.Fragment>
      <input
        type="radio"
        //selectedValue={this.state.selectedValue}
        onChange={this.handleChange}
        id={this.props.id}
        name={this.props.name}
        value={this.props.value}
        >
          {/* {props.children} */}
        </input>
        <Label id={this.props.id}/>
      </React.Fragment>
    );
  }
}

export default RadioButton