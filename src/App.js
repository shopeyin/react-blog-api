import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";
import CommentPage from "./pages/CommentPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/posts" component={PostsPage} />
          <Route path="/comments/:id" component={CommentPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
