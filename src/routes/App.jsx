import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Timeline from "../pages/timeline/Timeline";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import Reset from "../pages/reset/Reset";
import { PrivateRoute, PublicRoute } from "./helperRoutes";
import { AuthProvider } from "../services/Auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/register" component={Register} />
          <PublicRoute exact path="/reset" component={Reset} />
          <PrivateRoute exact path="/timeline" component={Timeline} />
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
