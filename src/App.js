import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App(){
  return(
    <HashRouter>
      <Route path="/" component={Home} />
      <Route path="/" component={About} />
      <Route path="/" component={Project} />
      <Route path="/" component={Footer} />
    </HashRouter>
  )
}

export default App;