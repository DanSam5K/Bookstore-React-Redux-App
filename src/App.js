import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './redux/category/Categories';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/">
            <Books />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
);

export default App;
