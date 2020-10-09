import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Scribble from "../public/scribble.svg";

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <div className="d-flex align-items-center justify-content-center main-bg">
      <h1 className="main-header">soon.</h1>
      <Scribble />
    </div>
  );
}

export default App;
