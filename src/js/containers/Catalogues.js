import { connect } from "react-redux";

import Catalogues from "components/catalogue/Catalogues";
import { fetchCatalogues } from "actions/catalouge";

const mapStateToProps = state => ({
  catalogues: state.catalogues.catalogueList,
  isLoading: state.catalogues.isLoading
});

export default connect(
  mapStateToProps,
  {
    fetchCatalogues
  }
)(Catalogues);
