import React, { PureComponent, Fragment } from "react";
import NavigationBar from "components/NavigationBar";

export default class Home extends PureComponent {
  render() {
    return (
      <Fragment>
        <NavigationBar />
        <iframe className="iframe" src="/static/home.html" />
      </Fragment>
    );
  }
}
