import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { AddForm, FullPost, PostsList, NotFound } from "../components";
import routes from "../routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <div className="container">
              <div className="content">
                <div className="content">
                  <Switch>
                    <Route
                      exact
                      path={routes.MAIN_POST_PAGE}
                      component={PostsList}
                    />
                    <Route path={routes.POST_PAGE} component={FullPost} />
                    <Route path={routes.CREATE_POST_PAGE} component={AddForm} />
                    <Route path="*" component={NotFound} />
                    <Redirect to="/" />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
