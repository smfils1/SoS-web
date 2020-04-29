import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
const unityContent = new UnityContent(
  "build/Build/build.json",
  "build/Build/UnityLoader.js"
);

const BetaPage = () => {
  return <Unity unityContent={unityContent} />;
};

export default BetaPage;
