import React from "react";
import "./Workout-page.css";
import CurrentWorkout from "../Current-workout/Current-workout"
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
        
        // if (!WorkoutType) {
        //     this.setState({
        //         newStrengthWorkout: !this.state.newStrengthWorkout
        //     })
        // } else {
        //     this.setState({
        //         newStrengthWorkout: !this.state.newStrengthWorkout
        //     })
        //     if (this.state.currentWorkout) {
        //         //Save the workout
        //         this.saveWorkout(this.state.currentWorkout);
        //         //setState will clear the currentExercises
        //         this.setState({
        //             currentExercises: []
        //         })
        //     } else {
        //         this.setState({
        //             currentExercises: []
        //         })
        //     }
        // }
    }

    render() {
        return(
            <div>
                <NewWorkoutButton title="New Strength Workout" workoutType="strength" onChange={this.newWorkout}/>
                <NewWorkoutButton title="New Cardio Workout" workoutType="cardio" onChange={this.newWorkout}/>
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
        )
    }
}

export default WorkoutPage;