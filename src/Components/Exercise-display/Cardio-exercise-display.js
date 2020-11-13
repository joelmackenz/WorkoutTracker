import React from "react";
import Stopwatch from "../Tools/Stopwatch/Stopwatch"
import "./Exercise-display.css";
import CardioTimeButton from "./Cardio-time-button";

class CardioExerciseDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sets: 0,
            time: 0,
            exercise: "",
        }
    this.addSet = this.addSet.bind(this);
    this.removeExercise = this.removeExercise.bind(this)
    }

    addSet(time){
        this.setState({
            sets: this.state.sets +1,
            time: time,
            exercise: this.props.exercise
        })
        this.props.onChange([this.state.sets + 1, time, this.props.exercise])
    }

    removeExercise(){
        this.props.removeExercise(this.props.exercise)
    }

    render(){
        return(
            <div className="exercise">
                <button onClick={this.removeExercise}>X</button>
                <h3 className="title">{this.props.exercise}</h3>
                <Stopwatch onChange={this.addSet}/>
                <div className="buttons">
                    <CardioTimeButton onChange={this.addSet} timePeriod="10 min" />
                    <CardioTimeButton onChange={this.addSet} timePeriod="20 min" />
                    <CardioTimeButton onChange={this.addSet} timePeriod="30 min" />
                </div>
                <div>
                    <p>Complete Sets</p>
                    <p>Sets: {this.state.sets}</p>
                    <p>Time: {this.state.time}</p>
                </div>
            </div>
        )
    }
}

export default CardioExerciseDisplay;