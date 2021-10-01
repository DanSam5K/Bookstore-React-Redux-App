import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './redux/category/Categories';
import Navbar from './components/Navbar';
import './assets/css/app.css';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Switch>
        <div className="App">
          <div className="backBG bg-dark-grey">
            <div className="container center">
              <Route path="/BookList">
                <BookList />
              </Route>
              <Route path="/categories">
                <Categories />
              </Route>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  </>
);

export default App;
