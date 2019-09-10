import React, { Component } from "react";
import "./style.css";
import Lesson from "./Lesson";

export default class Day extends Component {
  render() {
    let { dayName, lessons } = this.props.day;
    return (
      <div className="day">
        <div className="day__name">
          <div className="day__name-content">{dayName}</div>
        </div>
        <div className="day__items">
          {lessons.map((item, i) => {
            return <Lesson info={item} key={i} />;
          })}
        </div>
      </div>
    );
  }
}
