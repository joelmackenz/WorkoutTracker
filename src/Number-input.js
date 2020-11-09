import React from "react";

class NumberInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            chosenNumber: 0,
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitChange = this.submitChange.bind(this)
    }

    handleChange(e){
        this.setState ({
            chosenNumber: e.target.value
        })
    }

    submitChange(e) {
        e.preventDefault();
        const chosenNumber = this.state.chosenNumber;
        this.props.onChange(chosenNumber);
    }

    render(){
        return (
            /*Placing this entire input in a form, which allows for onSubmit to be used */
            <form onSubmit={this.submitChange}>
                <p>{this.props.repsOrSets}</p>
                <input type="number" onChange={this.handleChange} value={this.state.chosenNumber}/>
                <input type="submit" value="Save"/>
            </form>
        )
    }
}

export default NumberInput;