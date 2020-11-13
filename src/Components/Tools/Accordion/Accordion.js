import React from "react";
import "./Accordion.css"

class Accordion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            accordionStyle: "closed"
        }
        this.accordionDisplay = this.accordionDisplay.bind(this)
    }

    accordionDisplay() {
        if (this.state.accordionStyle === "open") {
            this.setState({
                accordionStyle: "closed"
            }) 
          } else {
            this.setState({
                accordionStyle: "open"
            })
          }
        }

    render(){
    return(
        <div>
            <button onClick={this.accordionDisplay}>{this.props.buttonTitle}</button>
            <div className={this.state.accordionStyle}>
                <p>{this.props.info}</p>
            </div>
        </div>
    )
    }
}

export default Accordion;