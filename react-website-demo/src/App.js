import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/HomePage/Home'
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
      
    </Router>
  );
}

export default App;
