import React, { PureComponent } from "react";
import uniqid from "uniqid";
import PropTypes from "prop-types";

export default class CollapsiblePanel extends PureComponent {
  render() {
    const targetId = uniqid();
    return (
      <div className="panel panel-default">
        <div className="panel-heading" data-toggle="collapse" data-target={`#${targetId}`}>
          <h5 className="panel-title">{this.props.title}</h5>
        </div>
        <div id={targetId} className="panel-collapse collapse">
          <div className="panel-body">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
CollapsiblePanel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};
