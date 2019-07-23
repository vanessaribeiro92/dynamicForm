import React, { Component } from "react";
import Label from "../label/index"


class SelectInput extends Component {

  render() {
    
    return (
      <React.Fragment>
      <Label id={this.props.id}></Label>
      <select name="select"
          id={this.props.id}
          value={this.props.value}
          name={this.props.name}
          >
            {this.props.options.map(item => {
              return <option value={item.value}>{item.text}</option>
            })}
        </select>
      </React.Fragment>
    )
  }
}

export default SelectInput