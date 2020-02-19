import React, {Component} from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

class App extends Component{
  state = {
    isLoading: true,
  }

  componentDidMount(){
    this.setState({
      isLoading: false
    })
  }
  render(){
    const { isLoading } = this.state;
    return(
      isLoading
        ? <div>Loading</div>
        :       <HashRouter>
        <Route path="/" component={Navigation} />
        <Route path="/" component={Home} />
        <Route path="/" component={About} />
        <Route path="/" component={Project} />
        <Route path="/" component={Footer} />
      </HashRouter>
    )
  }
}

export default App;