import React from "react";
import "./components/SkillBlock";
import { Cursor } from "./components/Cursor";
import { CircleFollowCursor } from "./components/CircleFollowCursor";
import { CircleCursor } from "./components/CircleCursor";
import CleanHome from "./views/CleanHome";
import SerifExperimentalHome from "./views/SerifExperimentalHome";

// import "./dist/App.css";

function App() {
  return (
    <>
      <CircleCursor />
      <CleanHome />
    </>
  );
}

export default App;
