// Adapted from https://medium.com/@peterjd42/building-timers-in-react-stopwatch-and-countdown-bc06486560a2

import React, { Component } from "react";
import "./Stopwatch.css";

class Stopwatch extends Component {
  constructor(props){
    super(props)
    this.state = {
      timerOn: false,
            timerStart: 0,
            timerTime: 0,
            timerSet: 0,
    }
    this.saveTimer = this.saveTimer.bind(this)
  }

    startTimer = () => {
      this.setState({
        timerOn: true,
        timerTime: this.state.timerTime,
        timerStart: Date.now() - this.state.timerTime
      });
      this.timer = setInterval(() => {
        this.setState({
          timerTime: Date.now() - this.state.timerStart
        });
      }, 10);
    };

    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
      };

    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
      };

    saveTimer() {
      let centiseconds = ("0" + (Math.floor(this.state.timerTime / 10) % 100)).slice(-2);
      let seconds = ("0" + (Math.floor(this.state.timerTime / 1000) % 60)).slice(-2);
      let minutes = ("0" + (Math.floor(this.state.timerTime / 60000) % 60)).slice(-2);
      let hours = ("0" + Math.floor(this.state.timerTime / 3600000)).slice(-2)
      
      //Removes the zeros from numbers
      if (seconds.slice(0, 1) === "0") {seconds = seconds.slice(1)}
      if (minutes.slice(0, 1) === "0") {minutes = minutes.slice(1)}
      if (hours.slice(0, 1) === "0") {hours = hours.slice(1)}

      let time = //Only return the elements that are not 0. If minutes are present, display
                 // number with "minutes"; if not, use "seconds"
                  (hours !== "0" ? hours + " hours " : "") +
                  (minutes !== "0" ? minutes + " min " : "") +
                  seconds + 
                  (minutes !== "0" ? " minutes" : "." + centiseconds + " seconds")
      this.props.onChange(time)
      }

    render() {
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

        return (
            <div className="container">
                <div className="Stopwatch">
                    <div className="Stopwatch-header">Stopwatch</div>
                </div>
                <div className="Stopwatch-display">
                    {hours} : {minutes} : {seconds} : {centiseconds}
                </div>
                {this.state.timerOn === false && this.state.timerTime === 0 && (
                  <button onClick={this.startTimer}>Start</button>
                )}
                {this.state.timerOn === true && (
                  <button onClick={this.stopTimer}>Stop</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                  <button onClick={this.startTimer}>Resume</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                  <button onClick={this.resetTimer}>Reset</button>
                )}
                {this.state.timerOn === false && (
                  <button onClick={this.saveTimer}>Save Set</button>
                )}
            </div>
        );
    }
}
export default Stopwatch;