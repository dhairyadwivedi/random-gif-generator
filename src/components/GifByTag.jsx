import React, { useState, useEffect } from "react";
import axios from "axios";

import { useGif } from "../hooks/useGif";

export const GifByTag = () => {
  const [tag, setTag] = useState("lizards");
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random {tag} GIF</h1>
      <img src={gif} alt="Random Gif" />
      <div class="tag-input">
        <input
          type="text"
          onChange={(e) => {
            setTag(e.target.value);
          }}
          value={tag}
          placeholder="Type the tag name..."
        />
        <button onClick={() => fetchGif(tag)}><span>New GIF</span></button>
      </div>
    </div>
  );
};
