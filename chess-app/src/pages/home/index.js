import React from "react";
import "./style.css";

export default function HomePage() {
  return (
    <div class="container">
      <div class="video-container">
        <video
          src="https://storage.coverr.co/videos/GK300Fvvg4T1LYiC9SJpUAK36CDldcR7A?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjE0NzE0NjcxfQ.EnOnRFM1w-1SJY_AfEhhjR6S_dPgXx0lj1kKMvZheTk"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}
