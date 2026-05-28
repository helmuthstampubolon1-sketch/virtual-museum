import { useState, useEffect, useRef } from 'react' 

function SmartImage({ 
  src, 
  alt, 
  className = '' 
}) { 

  const [loaded, setLoaded] = useState(false) 
  const imgRef = useRef(null)

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true)
    }
  }, [])

  return ( 
    <img 
      ref={imgRef}
      src={src} 
      alt={alt} 
      loading="lazy" 
      className={` 
        ${className} 
        ${loaded ? 'loaded' : ''} 
      `} 
      onLoad={() => setLoaded(true)} 
      onError={() => {
        console.error(`Failed to load image: ${src}`)
        setLoaded(true) // Show it anyway (as broken icon) so we know it's there
      }}
    /> 
  ) 
} 

export default SmartImage 
