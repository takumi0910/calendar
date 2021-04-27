import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import styles from './style/style.css'
import login from './style/login.css'
import module from './style/module.css'

const Tool = () => (
  <div>
    <App />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));