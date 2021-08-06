import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Timeline from './pages/timeline/Timeline';
import NotFound from './pages/notFound/NotFound';

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/login" component={Login} ></Route>
     <Route exact path="/register" component={Register} ></Route>
     <Route exact path="/timeline" component={Timeline} ></Route>
     <Route exact path="/notfound" component={NotFound} ></Route>
    </Switch>    
    </BrowserRouter>
  );
}

export default App;
