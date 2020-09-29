import React, { useState, useEffect } from "react";
import axios from "axios";

import { useGif } from "../hooks/useGif";

export const GifByTag = () => {
  const [tag, setTag] = useState("lizards");
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random {tag} GIF</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <input
        type="text"
        onChange={(e) => {
          setTag(e.target.value);
        }}
        value={tag}
      />
      <button onClick={() => fetchGif(tag)}>New GIF</button>
    </div>
  );
};
