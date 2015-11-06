import React from "react";

import MainNavigation from "./components/MainNavigation.jsx";

require("./styles/app.scss")

class MainApp extends React.Component{
  render(){
    return <div>
              <MainNavigation />
              <h1>Test App</h1>
          </div>
  }
}

React.render(<MainApp />, document.getElementById("content"))
