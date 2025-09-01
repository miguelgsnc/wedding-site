import logo from './logo.svg';
import './App.css';
import React from "react";
import WelcomeSection from "./sections/WelcomeSection";
import OurStory from "./sections/OurStory";
import Schedule from "./sections/Schedule";
import Location from "./sections/Location";
import Motif from "./sections/Motif";
import WeddingGifts from "./sections/WeddingGifts";
import TravelGuide from "./sections/TravelGuide";
import RSVP from "./sections/RSVP";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <WelcomeSection />
      <OurStory />
      <Schedule />
      <Location />
      <Motif />
      <RSVP />
      <WeddingGifts />
      <TravelGuide />
    </div>
  );
}

export default App;
