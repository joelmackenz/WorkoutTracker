//This displays a number of exercises' info. It will map over the info taken from ../Select-exercises/Exercise-display.js

import React from "react";
import ExerciseDisplay from "../Exercise-display/Reps-sets-exercise-display";
import "./Strength-Workout-display.css";

class StrengthWorkoutDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           selectedExercises: []
        }
        this.saveExercises = this.saveExercises.bind(this)
        this.removeExercise = this.removeExercise.bind(this)
    }

    saveExercises(exerciseInfoArray) {
        let selectedExercisesClone = Array.from(this.state.selectedExercises)
        selectedExercisesClone.push(exerciseInfoArray)
        this.setState({
            selectedExercises: selectedExercisesClone
        })
        this.props.onChange(selectedExercisesClone)
    }
    
    removeExercise(exercise){
        this.props.removeExercise(exercise)
    }

    render(){
        return(
            <div className="exercises">
                {this.props.exerciseList.map((entry, i) => 
                    <ExerciseDisplay 
                        key={i}
                        exercise={entry} 
                        onChange={this.saveExercises}
                        removeExercise={this.removeExercise}
                    />
                )}
            </div>
        )
    }
}

export default StrengthWorkoutDisplay;