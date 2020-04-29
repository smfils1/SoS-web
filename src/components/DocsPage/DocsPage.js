
import React from "react";
import Markdown from "markdown-to-jsx";
import raw from "raw.macro";
import "./DocsPage.css";

const DocsPage = () =>  (
      <Markdown
        className="docs"
        children={raw("../../assets/unity/README.md")}
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
