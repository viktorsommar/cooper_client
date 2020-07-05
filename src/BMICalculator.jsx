import React, { Component } from "react";
import BmiForm from "./components/BmiForm";
import Message from "./components/Message";
import { calculateBmi } from "./helpers/bmiHelper";

class BmiCalculator extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: ""
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value })

  onSubmitHandler = e => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height
    )
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  }

  render() {
    return (
    <div>
      <BmiForm
        weight={this.state.weight}
        height={this.state.height}
        onChangeHandler={this.onChangeHandler} 
        onSubmitHandler={this.onSubmitHandler}
      />
      {this.state.bmiValue && (
        <Message
          bmiValue={this.state.bmiValue}
          bmiMessage={this.state.bmiMessage}
        />
      )}
    </div>
    )
  }
}

export default BmiCalculator;