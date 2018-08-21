import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import NavigationBar from "components/NavigationBar";
import CatalogueTable from "components/catalogue/CatalogueTable";
import history from "util/history";

export default class Catalogues extends PureComponent {
  constructor(props) {
    super(props);
    this.onRowClick = this.onRowClick.bind(this);
  }

  onRowClick(state, rowInfo) {
    return {
      onClick: () => history.push(`/catalogues/${rowInfo.original.name}`)
    };
  }

  componentDidMount() {
    const { catalogues, fetchCatalogues } = this.props;

    if (catalogues.length === 0) {
      fetchCatalogues();
    }
  }

  render() {
    const { isLoading } = this.props;
    return (
      <Fragment>
        <NavigationBar />
        <CatalogueTable data={this.props.catalogues} isLoading={isLoading} onClick={this.onRowClick} tableClass="catalogue__table" />
      </Fragment>
    );
  }
}

Catalogues.propTypes = {
  catalogues: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  fetchCatalogues: PropTypes.func
};
