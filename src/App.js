import React from "react";

import { RandomGif } from "./components/RandomGif";
import { GifByTag } from "./components/GifByTag";

import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Random GIF Generator</h1>
      <div className="main-container">
        <RandomGif />
        <GifByTag />
      </div>
    </div>
  );
};

export default App;
