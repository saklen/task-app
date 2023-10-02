
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
import TaskForm from "./components/TaskForm";
import TaskView from "./components/TaskView";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={TaskList} />
          <Route path="/tasks/new" component={TaskForm} />
          <Route path="/tasks/:id" component={TaskDetails} />
          <Route path="/view/:id" component={TaskView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
