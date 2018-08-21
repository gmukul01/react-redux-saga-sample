import React, { PureComponent } from "react";
import ReactTable from "react-table";
import PropTypes from "prop-types";
import createTable from "react-table-hoc-fixed-columns";

const DataTable = createTable(ReactTable);

export default class CatalogueTable extends PureComponent {
  constructor(props) {
    super(props);
    this.getColumn = this.getColumn.bind(this);
  }

  getColumnHeaders() {
    const { data } = this.props;
    if (!data || data.length === 0) {
      return [];
    }
    return Object.keys(data[0]).map(key => ({
      Header: key.toUpperCase(),
      accessor: key,
      id: key,
      fixed: stickyColumns.indexOf(key) !== -1,
      style: {
        textAlign: textColumns.indexOf(key) !== -1 ? "left" : "right"
      }
    }));
  }

  render() {
    const columns = this.getColumnHeaders(),
      { data, onClick, tableClass, isLoading } = this.props;

    return (
      <section className={tableClass}>
        <DataTable columns={columns} data={data} loading={isLoading} getTrProps={onClick} className={"table -striped -highlight"} />
      </section>
    );
  }
}

CatalogueTable.propTypes = {
  data: PropTypes.array.isRequired,
  tableClass: PropTypes.string,
  onClick: PropTypes.func,
  isLoading: PropTypes.bool
};
