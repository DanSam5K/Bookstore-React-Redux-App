import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import NavbarComponent from './components/Navbar';

const App = () => (
  <>
    <Router>
      <NavbarComponent />
      <div>
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
      </div>
    </Router>
  </>
);

export default App;
