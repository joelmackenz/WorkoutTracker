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