import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";

import Home from "components/Home";
import Catalogues from "containers/Catalogues";

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalogues" component={Catalogues} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
