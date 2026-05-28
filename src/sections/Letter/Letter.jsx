import ReactMarkdown from 'react-markdown' 

import letter from '../../../content/letter.md?raw' 

import Reveal from '../../components/Reveal' 

import './Letter.css' 

function Letter() { 

  return ( 
    <section className="section letter-section"> 

      <div className="letter-background-glow" /> 

      <div className="container"> 

        <Reveal> 
          <div className="letter-layout"> 

            <p className="caption"> 
              Birthday Letter 
            </p> 

            <div className="letter-content"> 

              <ReactMarkdown> 
                {letter} 
              </ReactMarkdown> 

            </div> 

          </div> 
        </Reveal> 

      </div> 

    </section> 
  ) 
} 

export default Letter 
