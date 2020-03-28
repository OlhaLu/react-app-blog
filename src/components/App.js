import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { AddForm, PostsList, NotFound } from "../components";
import Navigation from "./Navigation";
import routes from "../routes";
import style from "styled-components";

class App extends Component {
  render() {
    return (
      <AppStyle>
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route exact path={routes.MAIN_POST_PAGE} component={PostsList} />
              <Route path={routes.CREATE_POST_PAGE} component={AddForm} />
              <Route path="*" component={NotFound} />
              <Redirect to="/" />
            </Switch>
          </div>
        </BrowserRouter>
      </AppStyle>
    );
  }
}

export default App;

const AppStyle = style.div`
background: #d3d3d3`;
