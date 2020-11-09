import React from "react";

class CardioTimeButton extends React.Component{
    constructor(props){
        super(props);
        this.setTime = this.setTime.bind(this)
    }

    setTime(){
        this.props.onChange(this.props.timePeriod)
    }

    render(){
        return(
            <div>
                <button onClick={this.setTime}>{this.props.timePeriod}</button>
            </div>
        )
    }
}

export default CardioTimeButton;