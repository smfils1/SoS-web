import React, { Component } from "react";
import Markdown from "markdown-to-jsx";
import docs from "../../assets/unity/README.md";
import "./DocsPage.css";

class DocsPage extends Component {
  state = { docs: "Loading" };

  componentDidMount() {
    fetch(docs)
      .then(response => response.text())
      .then(docs => this.setState({ docs }));
  }

  render() {
    const { docs } = this.state;

    return (
      <Markdown
        className="docs"
        children={docs}
        options={{
          overrides: {
            p: {
              component: "p",
              props: {
                className: "d-flex justify-content-center flex-wrap"
              }
            }
          }
        }}
      />
    );
  }
}
export default DocsPage;
