import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/HomePage/Home'
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer/Footer"
function App() {
  return (
    <Router>
      <Navbar/>
      
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
