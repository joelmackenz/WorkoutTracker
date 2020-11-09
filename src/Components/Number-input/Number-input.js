import React from "react";
import "./Number-input.css";

class NumberInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chosenReps: 10,
        }
        this.changeReps = this.changeReps.bind(this)
        this.submitChange = this.submitChange.bind(this)
    }

    changeReps(e){
        this.setState ({
            chosenReps: e.target.value
        })
    }

    submitChange(e) {
        e.preventDefault();
        const chosenReps = this.state.chosenReps;
        this.props.onChange(chosenReps);
    }

    render(){
        return (
            <form className="form" onSubmit={this.submitChange}>
                <p>Reps</p>
                <input className="input" type="number" onChange={this.changeReps} value={this.state.chosenReps}/>
                <input className="button" type="submit" value="Set"/>
            </form>
        )
    }
}

export default NumberInput;