import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { GlobalProvider } from './context/GlobalState';
import Dictaphones from './Dictaphones';
import CardList from './components/Cards/CardList';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            Home
          </a>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/"]} component={CardList} />
            <Route 
              render={props => <Dictaphones {...props}/>}
              path="/dictaphone/:cardId" 
              component={Dictaphones} 
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}
   

export default App;
