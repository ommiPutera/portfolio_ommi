import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";
import UnderConstruction from "./pages/Construction";
import Project_1 from "./pages/Project_1";
import ScrollToTop from "./component/ScrollToTop";

class App extends Component {
  render() {
    return (
      <div>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/project" exact component={Project} />
          <Route path="/project_1" exact component={Project_1} />
          <Route path="/aboutme" exact component={AboutMe} />
          <Route path="/under-construction" exact component={UnderConstruction} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
