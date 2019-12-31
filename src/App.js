import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomepageBuisness from "./components/homepageBusiness/homepageBusiness";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from "./components/homepage/homepage";
require('typeface-montserrat');
require('typeface-muli');

function App() {
  return (
    <BrowserRouter className="App">
        <Switch>
            <Route exact  path='/' component={Homepage}/>
            <Route exact  path='/buisness' component={HomepageBuisness}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
