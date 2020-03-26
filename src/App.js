import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";
import Home from './Pages/Home/Home.js'
import { render } from "@testing-library/react";

function App() {
 
  return ( 
  <Router>
    <div>
    <Route exact path = "/" component = {Home} />
    </div>
  </Router>
  );
};

export default App;
