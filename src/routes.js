import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import StoryRoulette from "./components/StoryRoulette";
import Story from "./components/Story";
import Admin from "./components/Admin";
import AuthRouter from "./components/authRoutes";
import AddEdit from "./components/AddEdit";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/about" component={About} />
      <Route path="/storyroulette" component={StoryRoulette} />
      <Route path="/story/:id" component={Story} />
      <Route path="/admin" component={AuthRouter(Admin)} />
      <Route path="/addEdit/:id" component={AuthRouter(AddEdit)} />
    </Switch>
  );
}
