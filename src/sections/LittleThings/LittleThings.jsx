import items from '../../../content/little-things.json' 

import Reveal from '../../components/Reveal' 
import LittleThingCard from '../../components/LittleThingCard' 

import './LittleThings.css' 

function LittleThings() { 

  return ( 
    <section className="section little-things-section"> 

      <div className="container"> 

        <Reveal> 
          <div className="little-heading"> 

            <p className="caption"> 
              Personal Observations 
            </p> 

            <h2 className="section-title"> 
              The Little Things 
            </h2> 

          </div> 
        </Reveal> 

        <div className="little-grid"> 

          {items.map((item, index) => ( 

            <LittleThingCard 
              key={index} 
              title={item.title} 
              text={item.text} 
              image={item.image} 
            /> 

          ))} 

        </div> 

      </div> 

    </section> 
  ) 
} 

export default LittleThings 
