import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Categories from "./redux/categories/Categories";
import Books from "./components/Books";

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/">
            <Books />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
