import React from "react";
import { Route } from "react-router-dom";
import Home from "./client/containers/home";
import CreatePush from "./client/containers/create-push";
import Navigation from "./client/components/navigation";

class AppRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/create-push" component={CreatePush} />
      </React.Fragment>
    );
  }
}

export default AppRouter;
