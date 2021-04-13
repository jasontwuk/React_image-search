// *** Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// *** Create a react component
// class App extends React.Component {
//   render() {
//     return;
//   }
// }

// *** Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
