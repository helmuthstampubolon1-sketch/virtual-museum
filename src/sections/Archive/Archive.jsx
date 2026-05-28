import memories from '../../../content/memories.json' 

import Reveal from '../../components/Reveal' 
import MemoryCard from '../../components/MemoryCard' 

import './Archive.css' 

function Archive() { 

  return ( 
    <section className="section archive-section"> 

      <div className="container"> 

        <Reveal> 
          <div className="archive-heading"> 

            <p className="caption"> 
              Documentary Archive 
            </p> 

            <h2 className="section-title"> 
              Memory Archive 
            </h2> 

          </div> 
        </Reveal> 

        <div className="archive-grid"> 

          {memories.map((memory, index) => ( 

            <MemoryCard 
              key={index} 
              index={index} 
              title={memory.title} 
              description={memory.description} 
              image={memory.image} 
              type={memory.type} 
            /> 

          ))} 

        </div> 

      </div> 

    </section> 
  ) 
} 

export default Archive 
