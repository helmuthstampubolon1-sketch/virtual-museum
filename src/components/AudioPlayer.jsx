import { useState, useRef, useEffect } from 'react'
import './AudioPlayer.css'

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Attempt to play on mount (in case the browser environment allows it)
    audioRef.current.play().then(() => {
      setIsPlaying(true)
      setHasStarted(true)
    }).catch(err => {
      console.log("Autoplay blocked, waiting for enter overlay click:", err)
      setIsPlaying(false)
    })
  }, [])

  const startExhibition = () => {
    setIsFadingOut(true)
    audioRef.current.play().then(() => {
      setIsPlaying(true)
    }).catch(err => {
      console.error("Failed to play on click:", err)
    })
    setTimeout(() => {
      setHasStarted(true)
    }, 800)
  }

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(err => {
        console.log("Failed to play:", err)
      })
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      {!hasStarted && (
        <div className={`museum-intro-overlay ${isFadingOut ? 'fade-out' : ''}`}>
          <div className="museum-intro-content">
            <p className="intro-caption">Virtual Exhibition</p>
            <h1 className="intro-title">Her Birthday,<br />My Favorite Masterpiece</h1>
            <p className="intro-description">
              Welcome to the private gallery. Please turn on your sound to fully experience the tour.
            </p>
            <button className="intro-enter-btn" onClick={startExhibition}>
              Enter Museum
            </button>
          </div>
        </div>
      )}

      <div className="audio-player-container">
        <audio
          ref={audioRef}
          src={`${import.meta.env.BASE_URL}assets/audio/background-music.mp3`}
          loop
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
    </>
  )
}

export default AudioPlayer
