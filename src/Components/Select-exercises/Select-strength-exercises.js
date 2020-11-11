import React from "react";
import "./Select-exercises.css"

class selectStrengthExercises extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedExercise: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            selectedExercise: e.target.value
        })
        this.props.onChange(e.target.value)
    }

    render(){
        return(
                <select 
                className="select-dropdown"
                id="lessonSelect" 
                onChange={this.handleChange}>
                    <option value="" selected disabled hidden>Choose an exercise</option>
                    <option value="Benchpress">Benchpress</option>
                    <option value="Squat">Squat</option>
                    <option value="Deadlift">Deadlift</option>
                    <option value="Shoulder press">Shoulder Press</option>
                </select>
        )
    }
}

export default selectStrengthExercises;