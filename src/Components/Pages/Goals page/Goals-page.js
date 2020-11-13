import React from "react";
import "./Goals-page.css";
import NewGoalButton from "./New-goal-button";
import Accordion from "../../Tools/Accordion/Accordion"

class GoalsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            goals: ["Placeholder","Placeholder"]

        }
    }
    render(){
        return(
            <div className="goals-main">
                <div className="sidebar">
                    <h1>Goals <img src="https://img.icons8.com/cotton/64/000000/checklist--v1.png" alt=""/></h1>
                    <Accordion buttonTitle={"Goals"} info={this.state.goals}/>
                </div>
                <div className="new-goal-input">
                    <NewGoalButton />
                </div>
            </div>
        )
    }
}

export default GoalsPage;