import Reveal from './Reveal' 
import SmartImage from './SmartImage' 

function LittleThingCard({ title, text, image }) { 

  return ( 
    <Reveal className="little-card"> 

      <div className="little-card-image"> 

        <SmartImage 
          src={image} 
          alt={title} 
        /> 

      </div> 

      <div className="little-card-content"> 

        <h3 className="little-card-title"> 
          {title} 
        </h3> 

        <p className="little-card-text"> 
          {text} 
        </p> 

      </div> 

    </Reveal> 
  ) 
} 

export default LittleThingCard 
