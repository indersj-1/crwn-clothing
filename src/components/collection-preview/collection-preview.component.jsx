import React from "react";

import "./collection-preview.component.scss";
import CollectionItem from "../collection-item/collection-item.component";
const CollectionPreview = ({ title, items }) => {
  console.log(title);

  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherCollectionItems }) => (
            <CollectionItem key={id} {...otherCollectionItems} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
