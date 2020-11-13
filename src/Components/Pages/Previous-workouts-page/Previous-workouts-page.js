import React from "react";
import Accordion from "../../Tools/Accordion/Accordion"

class PreviousWorkoutsPage extends React.Component {

    workouts() {
        const workoutsInfo = this.props.workoutInfo;
        const date = this.props.date;
        if (workoutsInfo.length === 0) {
            return <p>Input your first workout to start tracking your progress!<br/><br/>
                    From the Workouts page: <ul><li>select an exercise,</li> <li>press the set button,</li> <li>and press "save"!</li></ul></p>
        } else {
            return workoutsInfo.map(x => 
                //Renders the dynamic workout number
                <div> 
                    <Accordion 
                    info={
                        <div>
                            <h3>Workout date {date} </h3>
                            <p>{//Renders all the dynamic info inside of that workout
                                Object.values(x).map((value, index) => {
                                        return  <p key={index}>
                                                    {value[2]} set {value[0]}:  {value[1]} reps
                                                </p>
                                            })
                                    }
                            </p>
                        </div>
                    }
                    buttonTitle={date}
                    />
                </div>
            )
            }
        }

    render(){
        return(
            <div>
                {this.workouts()}
            </div>
        )
    }
}

export default PreviousWorkoutsPage;