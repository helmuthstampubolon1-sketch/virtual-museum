import Reveal from './Reveal' 
import SmartImage from './SmartImage' 

function PortraitCard({ image, title, caption }) { 

  return ( 
    <Reveal className="portrait-card slow-zoom"> 

      <div className="portrait-image-wrapper"> 

        <SmartImage 
          src={image} 
          alt={title} 
          className="portrait-image" 
        /> 

      </div> 

      <div className="portrait-content"> 

        <h3 className="portrait-title"> 
          {title} 
        </h3> 

        <p className="portrait-caption"> 
          {caption} 
        </p> 

      </div> 

    </Reveal> 
  ) 
} 

export default PortraitCard 
