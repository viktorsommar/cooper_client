import React, { Component } from 'react';
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from './components/InputFields';
import LoginForm from "./components/LoginForm";

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: ""
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const renderLogin = this.state.renderLoginForm ? (
      <LoginForm />
    ) : (
      <button 
      id="login" 
      onClick={() => this.setState({ renderLoginForm: true })}
      >
      Login
      </button>
    );
    return (
      <>
      <InputFields onChangeHandler={this.onChangeHandler} />
      <button id="login">Login</button>
      <LoginForm />
        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
        />
      </>
    );
  }
}

export default App;
