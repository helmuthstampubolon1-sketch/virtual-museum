import Reveal from './Reveal' 
import SmartImage from './SmartImage' 

function MemoryCard({ 
  title, 
  description, 
  image, 
  type, 
  index 
}) { 

  const getAbsoluteSrc = (path) => {
    if (!path) return '';
    if (path.startsWith('http') || path.startsWith('data:')) return path;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
  };

  return ( 
    <Reveal 
      className={`memory-card ${ 
        index % 2 === 0 
          ? 'offset-top' 
          : 'offset-bottom' 
      }`} 
    > 

      <div className={`memory-image-wrapper ${type}`}> 

        {type && type.startsWith('video') ? (
          <video 
            src={getAbsoluteSrc(image)} 
            className="memory-video-el" 
            autoPlay
            loop 
            muted 
            playsInline 
            style={{ pointerEvents: 'none' }}
          />
        ) : (
          <SmartImage 
            src={image} 
            alt={title} 
          /> 
        )}

      </div> 

      <div className="memory-content"> 

        <p className="caption"> 
          Memory Archive 
        </p> 

        <h3 className="memory-title"> 
          {title} 
        </h3> 

        <p className="memory-description"> 
          {description} 
        </p> 

      </div> 

    </Reveal> 
  ) 
} 

export default MemoryCard 
