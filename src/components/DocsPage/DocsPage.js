import React from "react";
import Markdown from "markdown-to-jsx";
import docs from "../../assets/unity/README.md";
import "./DocsPage.css";

const DocsPage = () => (
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

export default DocsPage;
