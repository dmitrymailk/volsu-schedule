import React, { Component } from "react";

export default class Lesson extends Component {
  render() {
    let { time, name } = this.props.info;
    return (
      <div className="day__item">
        <div className="day__item-time">{time}</div>
        <div className="day__item-content">{name}</div>
      </div>
    );
  }
}
