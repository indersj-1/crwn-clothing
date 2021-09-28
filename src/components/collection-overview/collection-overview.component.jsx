import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "../collection-overview/collection-overview.style.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionPreview } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollections }) => (
      <CollectionPreview key={id} {...otherCollections} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionPreview,
});
export default connect(mapStateToProps)(CollectionOverview);
