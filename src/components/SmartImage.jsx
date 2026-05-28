import { useState, useEffect, useRef } from 'react' 

function SmartImage({ 
  src, 
  alt, 
  className = '' 
}) { 

  const [loaded, setLoaded] = useState(false) 
  const imgRef = useRef(null)

  const getAbsoluteSrc = (path) => {
    if (!path) return '';
    if (path.startsWith('http') || path.startsWith('data:')) return path;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true)
    }
  }, [])

  return ( 
    <img 
      ref={imgRef}
      src={getAbsoluteSrc(src)} 
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
