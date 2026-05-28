import portraits from '../../../content/portraits.json' 

import PortraitCard from '../../components/PortraitCard' 
import Reveal from '../../components/Reveal' 

import './Portraits.css' 

function Portraits() { 

  return ( 
    <section className="section portraits-section"> 

      <div className="container"> 

        <Reveal> 
          <div className="portraits-heading"> 

            <p className="caption"> 
              Birthday Exhibition 
            </p> 

            <h2 className="section-title"> 
              Portraits Of You 
            </h2> 

          </div> 
        </Reveal> 

        <div className="portraits-grid"> 

          {portraits.map((portrait) => ( 

            <PortraitCard 
              key={portrait.image} 
              image={portrait.image} 
              title={portrait.title} 
              caption={portrait.caption} 
            /> 

          ))} 

        </div> 

      </div> 

    </section> 
  ) 
} 

export default Portraits 
