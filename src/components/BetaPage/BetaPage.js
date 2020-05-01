import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import "./BetaPage.css"

const unityContent = new UnityContent(
  "unity/build/WebGL/WebGL/Build/WebGL.json",
  "unity/build/WebGL/WebGL/Build/UnityLoader.js"
);

const BetaPage = () => {
  return <div className="w-100 bg-secondary"><div className="unity"><Unity unityContent={unityContent} /></div></div>;
};

export default BetaPage;
