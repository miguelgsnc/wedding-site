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
