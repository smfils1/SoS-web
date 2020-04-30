import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
import "./BetaPage.css"

const unityContent = new UnityContent(
  "build/Build/build.json",
  "build/Build/UnityLoader.js"
);

const BetaPage = () => {
  return <div className="w-100 bg-secondary"><div className="unity"><Unity unityContent={unityContent} /></div></div>;
};

export default BetaPage;
