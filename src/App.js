import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <div className="d-flex flex-column align-items-start justify-content-center main-bg">
      <div className="d-flex flex-column align-items-start justify-content-center">
        <h1 className="main-header">Hey</h1>
        <h1 className="main-header">I’m Eddie!</h1>
      </div>
      {/*
      <div className="d-flex flex-column align-items-start justify-content-center">
        <p className="">Software Developer Apprentice <a>@Cornerstone</a> (formerly Lumesse)
</p>
        <p className="">Freelance UI / UX Designer <a>@whitespace_</a></p>
      </div>
      */}
    </div>
  );
}

export default App;
