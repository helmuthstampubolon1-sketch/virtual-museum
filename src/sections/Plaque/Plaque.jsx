import Reveal from '../../components/Reveal' 
import './Plaque.css' 

function Plaque() { 

  return ( 
    <section className="section plaque-section"> 

      <div className="container"> 

        <div className="plaque-layout"> 

          <Reveal> 
            <div className="plaque-meta"> 

              <p className="caption"> 
                Birthday Curator Note 
              </p> 

              <div className="plaque-line" /> 

              <p className="plaque-year"> 
                2026 
              </p> 

            </div> 
          </Reveal> 

          <Reveal> 
            <div className="plaque-content"> 

              <h2 className="section-title"> 
                A Note For Your Day 
              </h2> 

              <p className="body-large plaque-text"> 
                This exhibition exists for one reason: 
                to celebrate your birthday and the quiet magic 
                you bring into my life every single day. 
              </p> 

              <p className="body plaque-subtext"> 
                In this virtual museum, every frame is a reminder 
                that admiring you has become one of the most honest 
                and beautiful parts of my world. 
              </p> 

            </div> 
          </Reveal> 

        </div> 

      </div> 

    </section> 
  ) 
} 

export default Plaque 
