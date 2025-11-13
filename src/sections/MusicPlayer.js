import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const audioRef = useRef(null);

  const startMusic = async () => {
    if (!audioRef.current) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.log("Playback blocked until user interaction:", err);
    }
  };

  const handleContinue = async () => {
    await startMusic();
    const overlay = document.getElementById("welcome-overlay");
    overlay.classList.add("opacity-0");
    setTimeout(() => setShowWelcome(false), 700);
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      await startMusic();
    }
  };

  return (
    <>
      {/* 🎵 Audio element */}
      <audio
        ref={audioRef}
        src="/music/yung kai - blue (official music video).mp3"
        loop
      />

      {/* 🎛️ Floating Play/Pause button */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleMusic}
          className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition"
          aria-label="Toggle Music"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>

      {/* 💌 Welcome overlay */}
      {showWelcome && (
        <div
          id="welcome-overlay"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center text-gray-800 text-center transition-opacity duration-700 cursor-pointer"
          onClick={handleContinue}
        >
          {/* 🌄 Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/desert_running.jpg')" }}
          />

          {/* 🤍 Semi-transparent white overlay */}
          <div className="absolute inset-0 bg-white/50" />

          {/* 💌 Foreground content */}
          <div className="relative z-10 flex flex-col items-center">
            <img
              src="/images/envelope.png"
              alt="Envelope with monogram"
              className="w-72 sm:w-96 drop-shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <p className="mt-6 text-lg text-gray-600 animate-pulse">
              Click to open
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicPlayer;




/*
import React, { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react"; // modern icons (run `npm install lucide-react` if not installed)

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Try autoplay when component mounts, fallback if blocked
  useEffect(() => {
    const tryAutoPlay = async () => {
      if (!audioRef.current) return;

      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Autoplay blocked by browser:", err);
        setIsPlaying(false); // wait for user interaction
      }
    };

    tryAutoPlay();
  }, []);

  // Toggle music manually
  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.log("Play blocked until user interaction:", err);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        src="/music/yung kai - blue (official music video).mp3"
        loop
      />
      <button
        onClick={toggleMusic}
        className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition"
        aria-label="Toggle Music"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
};

export default MusicPlayer;

*/
