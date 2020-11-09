import React from "react";
import NumberInput from "../Number-input/Number-input"
import "./Exercise-display.css";

class ExerciseDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sets: 0,
            reps: 0,
            exercise: "",
        }
    this.addSet = this.addSet.bind(this);
    }

    addSet(reps){
        this.setState({
            sets: this.state.sets +1,
            reps: reps,
            exercise: this.props.exercise
        })
        this.props.onChange([this.state.sets + 1, reps, this.props.exercise])
    }

    render(){
        return(
            <div className="exercise">
                <h3 className="title">{this.props.exercise}</h3>
                <NumberInput onChange={this.addSet}/>
                <div>
                    <p>Complete Sets</p>
                    <p>Sets: {this.state.sets}</p>
                    <p>Reps: {this.state.reps}</p>
                </div>
            </div>
        )
    }
}

export default ExerciseDisplay;