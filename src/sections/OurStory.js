// File: src/sections/OurStory.js
import React from "react";
import "./OurStory.css"; // new CSS file

export default function OurStory() {
  return (
    <section className="our-story-section flex flex-col items-center justify-center text-center px-6 py-20">
      <div className="bg-overlay-our-story max-w-3xl p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-4 text-center font-calisto">You are invited!</h2>
        <p className="text-lg md:text-xl leading-relaxed font-dubai-reg">
          After four wonderful years together—between Spain, the Philippines, and our home in Dubai, a place halfway between our roots—
          we’ve discovered that love knows no borders.
          <br />
          <br />
          And so, we’ve chosen to take the next step in our journey,
to celebrate our union surrounded by those who have shaped our story.
          <br />
          <br />
          With overflowing joy, we invite you to join us on this special day,
as our lives and dreams unite, forever intertwined.
        </p>
      </div>
    </section>
  );
}
