import React from "react";
import format from "date-fns/format";

export default class BibliographyPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;

    return <div className="mw6 center ph3 pv4">
      <p>{ entry.getIn(["data", "authors"])}</p>
      <p>{ entry.getIn(["data", "title"])}</p>
    </div>;
  }
}
