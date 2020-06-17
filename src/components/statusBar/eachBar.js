import React, { Component } from 'react'

export default class Bar extends Component {
  render() {
    const { value, color = "black" } = this.props;
    return (
      <div
        style={{
          width: value + "%",
          height: "20px",
          marginTop: "40px",
          backgroundColor: color
        }}
      />
    )
  }
}
