import Reveal from '../../components/Reveal' 
import './Entrance.css' 

function Entrance() { 

  return ( 
    <section className="entrance-section"> 

      <div className="entrance-overlay" /> 

      <div className="container"> 

        <div className="entrance-content"> 

          <Reveal> 
            <p className="caption entrance-caption"> 
              Birthday Exhibition 
            </p> 
          </Reveal> 

          <Reveal> 
            <h1 className="display-title entrance-title"> 
              Her Birthday, 
              <br /> 
              My Favorite Masterpiece 
            </h1> 
          </Reveal> 

          <Reveal> 
            <p className="entrance-description"> 
              A private virtual museum made to celebrate 
              the girl I admire most, today and always. 
            </p> 
          </Reveal> 

          <Reveal> 
            <div className="scroll-indicator"> 
              Scroll to begin the tour 
            </div> 
          </Reveal> 

        </div> 

      </div> 

    </section> 
  ) 
} 

export default Entrance 
