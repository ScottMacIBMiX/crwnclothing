import React from "react";

import "./collectionpreview.styles.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

export const CollectionPreview = ({ items, title }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
    {console.log(items.filter((item, idx) => idx < 4))}
      {items
        .filter((item, idx) => idx < 4)
        .map(({id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps}/>
        ))}
    </div>
  </div>
);
