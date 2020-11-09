import React from "react";

class selectCardioExercises extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedExercise: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            selectedExercise: e.target.value
        })
        this.props.onChange(e.target.value)
    }

    render(){
        return(
                <select 
                id="lessonSelect" 
                onChange={this.handleChange}>
                    <option value="" selected disabled hidden>Choose an exercise</option>
                    <option value="Running">Running</option>
                    <option value="Walking">Walking</option>
                    <option value="Swimming">Swimming</option>
                    <option value="Other">Other</option>
                </select>
        )
    }
}

export default selectCardioExercises;