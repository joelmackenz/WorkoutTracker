import React from "react";
import SelectStrengthExercises from "../Select-exercises/Select-strength-exercises";
import SelectCardioExercises from "../Select-exercises/Select-cardio-exercises";
import StrengthWorkoutDisplay from "../Workout-displays/Strength-Workout-display";
import CardioWorkoutDisplay from "../Workout-displays/Cardio-workout-display"
import "./Current-workout.css"

class CurrentWorkout extends React.Component{
    constructor(props) {
        super(props);
    this.state = {
        currentWorkout: [],
        currentExercises: [],
        date: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate()
    }
    this.updateExerciseList = this.updateExerciseList.bind(this);
    this.updateWorkoutList = this.updateWorkoutList.bind(this); 
    this.resetWorkout = this.resetWorkout.bind(this);
    this.saveWorkout = this.saveWorkout.bind(this);
    this.newWorkout = this.newWorkout.bind(this);
    this.removeExercise = this.removeExercise.bind(this)
    }   

    resetWorkout() {
        this.setState({
            currentExercises: []
        })
    }

    updateExerciseList(exercise) {
        if (this.state.currentExercises.includes(exercise)) {
        } else {
            const currentExercisesClone = Array.from(this.state.currentExercises);
            currentExercisesClone.push(exercise);
            this.setState({
                currentExercises: currentExercisesClone
            })
            this.props.updateCurrentExercises(currentExercisesClone)
        }
    }

    updateWorkoutList(info) {
        this.setState({
            currentWorkout: info
        })
        this.props.updateCurrentWorkout(info)
    }

    saveWorkout() {
        this.props.saveWorkout(this.state.currentWorkout, this.state.date)
    }

    newWorkout() {
        if (this.state.currentWorkout) {
            //Save the workout
            this.props.saveWorkout(this.state.currentWorkout);
            //setState will clear the currentExercises
            this.setState({
                currentExercises: []
            })
        } else {
            this.setState({
                currentExercises: []
            })
        }
    }

    removeExercise(exercise){
        let currentExercisesClone = Array.from(this.state.currentExercises)
        currentExercisesClone = currentExercisesClone.filter(ele => ele !== exercise)
        this.setState({
            currentExercises: currentExercisesClone
        })
    }
s

    render(){
        return(
        <div className="select-and-display">
                <div className="select-display-element">
                    <button className="save-new-element" onClick={this.newWorkout}>Save and Clear</button>
                    <button className="save-new-element" onClick={this.saveWorkout}>Save</button>
                    <button className="save-new-element" onClick={this.resetWorkout}>Clear</button>
                </div>
                {/* If strength is selected: */}
                {this.props.workoutType === "strength" && 
                    <div className="select-display-element-2">   
                        <div className="inner-1">
                            <SelectStrengthExercises   
                                onChange={this.updateExerciseList}
                            />
                        </div>
                        <div className="inner-2">
                            <StrengthWorkoutDisplay 
                                onChange={this.updateWorkoutList} 
                                removeExercise={this.removeExercise}
                                exerciseList={this.state.currentExercises}
                            />
                        </div>
                    </div>
                }
                {/* If cardio is selected: */}
                {this.props.workoutType === "cardio" && 
                    <div className="select-display-element-2">   
                         <div className="inner-1">
                             <SelectCardioExercises   
                                 onChange={this.updateExerciseList}
                             />
                        </div>
                        <div className="inner-2">
                            <CardioWorkoutDisplay 
                                removeExercise={this.removeExercise}
                                onChange={this.updateWorkoutList} 
                                exerciseList={this.state.currentExercises}
                                />
                        </div>
                     </div>
                }
        </div>
        )
    }
}

export default CurrentWorkout;