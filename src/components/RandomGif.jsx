import React from "react";

import { useGif } from "../hooks/useGif";

export const RandomGif = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random GIF</h1>
      <img width="500" src={gif} alt="Random Gif" />
      <button onClick={() => fetchGif()}>
        <span>New GIF</span>
      </button>
    </div>
  );
};
