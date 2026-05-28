import { useState, useRef, useEffect } from 'react'
import './AudioPlayer.css'

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)
  const audioRef = useRef(null)

  useEffect(() => {
    // Attempt to play on mount
    const playAudio = () => {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(err => {
        console.log("Autoplay blocked, waiting for interaction:", err)
        setIsPlaying(false)
      })
    }

    playAudio()

    // Fallback: Play on first user interaction with the document
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        playAudio()
      }
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('touchstart', handleFirstInteraction)
      window.removeEventListener('mousedown', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
      window.removeEventListener('pointerdown', handleFirstInteraction)
    }

    window.addEventListener('click', handleFirstInteraction)
    window.addEventListener('touchstart', handleFirstInteraction)
    window.addEventListener('mousedown', handleFirstInteraction)
    window.addEventListener('keydown', handleFirstInteraction)
    window.addEventListener('pointerdown', handleFirstInteraction)

    return () => {
      window.removeEventListener('click', handleFirstInteraction)
      window.removeEventListener('touchstart', handleFirstInteraction)
      window.removeEventListener('mousedown', handleFirstInteraction)
      window.removeEventListener('keydown', handleFirstInteraction)
      window.removeEventListener('pointerdown', handleFirstInteraction)
    }
  }, [])

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(err => {
        console.log("Autoplay blocked or audio failed:", err)
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="audio-player-container">
      <audio
        ref={audioRef}
        src="/assets/audio/background-music.mp3"
        loop
        autoPlay
      />
      
      <button 
        className={`audio-toggle-btn ${isPlaying ? 'is-playing' : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        <div className="music-bars">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <span className="audio-status-text">
          {isPlaying ? "Sound On" : "Sound Off"}
        </span>
      </button>
    </div>
  )
}

export default AudioPlayer
