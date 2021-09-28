import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenutItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selectors.js";
import "./directory.component.scss";
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...othersSectionProps }) => (
      <MenutItem key={id} {...othersSectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps, null)(Directory);
