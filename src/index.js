import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from ".";
import styles from './style.css'
import App from './App'

const Tool = () => (
  <div>
    <App />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));