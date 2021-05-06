import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import styles from './style.css'


const Tool = () => (
  <div>
    <App />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));