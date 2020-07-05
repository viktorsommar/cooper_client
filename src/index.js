import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api/v1"

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, 
    document.getElementById("root"));

serviceWorker.unregister();
