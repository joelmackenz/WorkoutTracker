import React from "react";
import Goal from "../../Goal/Goal"

class NewGoalButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            goal:0
        }
    }
    
    newGoal() {
        
    }

    render(){
        return(
            <div>
                <button className="button" onClick={this.newGoal}>
                    New Goal
                </button>
                <div>
                    <Goal />
                </div>
            </div>
        )
    }
}

export default NewGoalButton;