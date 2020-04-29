import React from "react";
import raw from "raw.macro";
import Markdown from "markdown-to-jsx";
import "./DocsPage.css";

const docs = raw("./README.md");

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
