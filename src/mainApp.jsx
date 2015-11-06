import React from "react";

import MainNavigation from "./components/MainNavigation.jsx";

import AppStyles from "./styles/app.scss";
import MainNavigationDefaultStyles from "./components/MainNavigation.scss";

if (!Object.assign)
  Object.assign = React.__spread;

const MainNavStyles = Object.assign({}, MainNavigationDefaultStyles, AppStyles);

class MainApp extends React.Component{
  render(){
    return <div>
              <MainNavigation styles={MainNavStyles}/>
              <h1>Test App</h1>
          </div>
  }
}

React.render(<MainApp />, document.getElementById("content"))
