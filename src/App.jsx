import React, { Component } from 'react';
import DisplayCooperResult from "./components/DisplayCooperResult";
import InputFields from './components/InputFields';
import LoginForm from "./components/LoginForm";
import { authenticate } from "./modules/auth";
import DisplayPerformanceData from "./components/DisplayPerformanceData"
import { Button } from "semantic-ui-react";

class App extends Component {
  state = {
    distance: "",
    gender: "female",
    age: "",
    renderLoginForm: false,
    authenticated: false,
    message: "",
    entrySaved: false,
    renderIndex: false
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, entrySaved: false });
  };

  onLogin = async e => {
    e.preventDefault();
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    );
    if (response.authenticated) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: response.message, renderLoginForm: false });
    }
  };

  render() {
    const { renderLoginForm, authenticated, message } = this.state;
    let renderLogin;
    let performanceDataIndex;
    switch(true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />;
        break;
      case !renderLoginForm && !authenticated:
        renderLogin = (
          <>
            <Button
              id="login"
              onClick={() => this.setState({ renderLoginForm: true })}
            >
              Login
            </Button>
            <p id="message">{message}</p>
          </>
        );
        break;
      case authenticated:
        renderLogin = (
          <p id="message">Hi {JSON.parse(sessionStorage.getItem("credentials")).uid}</p>
        );
        if (this.state.renderIndex) {
          performanceDataIndex = (
            <>
              <DisplayPerformanceData
                updateIndex={this.state.updateIndex}
                indexUpdated={() => this.setState({ updateIndex: false })}
              />
              <Button onClick={() => this.setState({ renderIndex: false })}>Hide past entries</Button>
            </>
          )
        } else {
          performanceDataIndex = (
            <Button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</Button>
          )
        }
      }

    return (
      <div class="ui inverted vertical center aligned segment">
        <nav class="ui container">
        <h1 class="ui inverted header">Cover</h1>
        <div class="ui borderless inverted compact menu">
          <a class="active item">Cooper Test</a> <a class="item">BMI Calculator</a>
          <a class="item">Sign Up</a>
        </div>
      </nav>
        <div class="ui content container">
        <h1 class="ui inverted header">Take the Cooper Test!</h1>
        <p>
        The Cooper test is a test of physical fitness. It was designed by Kenneth H. Cooper in 1968 for US military use. In the original form, the point of the test is to run as far as possible within 12 minutes.
        </p>
      <>
      <InputFields onChangeHandler={this.onChangeHandler} />
      {renderLogin}
      <DisplayCooperResult
      distance={this.state.distance}
      gender={this.state.gender}
      age={this.state.age}
      authenticated={this.state.authenticated}
      entrySaved={this.state.entrySaved}
      entryHandler={() => this.setState({ entrySaved: true, updateIndex: true })}
    />
        {performanceDataIndex}
      </>
    </div>
    </div>
    );
  }
}

export default App;
