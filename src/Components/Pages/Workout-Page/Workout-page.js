import React from "react";
import "./Workout-page.css";
import CurrentWorkout from "../../Current-workout/Current-workout"
import NewWorkoutButton from "./New-workout-button";

export class WorkoutPage extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        currentExercises: [],
        currentWorkout: [],
        workoutType: "",
        date: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()
    }
    this.updateCurrentExercises = this.updateCurrentExercises.bind(this);
    this.updateCurrentWorkout = this.updateCurrentWorkout.bind(this);
    this.newWorkout = this.newWorkout.bind(this);
    this.resetWorkout = this.resetWorkout.bind(this);
    this.saveWorkout = this.saveWorkout.bind(this);  
    }

    updateCurrentExercises(exerciseInfo) {
        this.setState({
            currentExercises: exerciseInfo,
        })
    }

    updateCurrentWorkout(workoutInfo) {
        this.setState({
            currentWorkout: workoutInfo
        })
    }

    saveWorkout(currentWorkoutInfo, date) {
        this.props.onChange(currentWorkoutInfo, date)
    }

    resetWorkout() {
        this.setState({
            currentExercises: []
        })
    }

    newWorkout(workoutType) {
        this.setState({
            workoutType: workoutType,
        })
    }

    render() {
        return(
            <div className="main">
                <div className="button-container">
                    <NewWorkoutButton title="New Strength Workout" workoutType="strength" onChange={this.newWorkout}/>
                    <NewWorkoutButton title="New Cardio Workout" workoutType="cardio" onChange={this.newWorkout}/>
                </div>
                <div className="current-workout">
                    {this.state.workoutType === "strength" && <CurrentWorkout 
                                                                workoutType="strength"
                                                                updateCurrentExercises={this.updateCurrentExercises}
                                                                updateCurrentWorkout={this.updateCurrentWorkout}
                                                                saveWorkout={this.saveWorkout}/>}
                    {this.state.workoutType === "cardio" && <CurrentWorkout
                                                                workoutType="cardio"
                                                                updateCurrentExercises={this.updateCurrentExercises}
                                                                updateCurrentWorkout={this.updateCurrentWorkout}
                                                                saveWorkout={this.saveWorkout}/>}
                </div>
            </div>
        )
    }
}

export default WorkoutPage;