import React from "react";

require("./styles/app.scss")

class MainApp extends React.Component{
  render(){
    return <h1>Test App</h1>
  }
}

React.render(<MainApp />, document.getElementById("content"))
