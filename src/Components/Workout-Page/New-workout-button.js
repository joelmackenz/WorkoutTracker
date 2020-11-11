import React from "react";
import "./New-workout-button.css";

class NewWorkoutButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            workoutType: ""
        }
    this.newWorkout = this.newWorkout.bind(this)
    }

    newWorkout() {
        this.setState({
            workoutType: this.props.workoutType
        })
        this.props.onChange(this.props.workoutType)
    }
    //     } else {
    //         this.setState({
    //             newStrengthWorkout: !this.state.newStrengthWorkout
    //         })
    //         if (this.state.currentWorkout) {
    //             //Save the workout
    //             this.saveWorkout(this.state.currentWorkout);
    //             //setState will clear the currentExercises
    //             this.setState({
    //                 currentExercises: []
    //             })
    //         } else {
    //             this.setState({
    //                 currentExercises: []
    //             })
    //         }
    //     }
    // }
    
    render(){
        return(
            <div>
                <button className="button" onClick={this.newWorkout}>
                    {this.props.title}
                </button>
            </div>
        )
    }
}

export default NewWorkoutButton;