import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {title, subtitle} = this.props;
    return <div className="jumbotron">
              <h1 className="f2 f1-l b di lh-title mb3 white mw6 bg-primary">
                { title }
              </h1>
              {subtitle && <p className="b f4 di lh-title mb3 white mw6 bg-primary">{ subtitle }</p>}
    </div>;
  }
}
