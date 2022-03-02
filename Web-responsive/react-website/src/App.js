import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer/Footer";
import Servies from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SingUp from "./pages/SingUp/SignUp";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/services" component={Servies}></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/sign-up" component={SingUp}></Route>
      </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
