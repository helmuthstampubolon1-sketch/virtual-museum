import { useReveal } from '../hooks/useReveal' 
import clsx from 'clsx' 

function Reveal({ children, className = '' }) { 

  const { ref, visible } = useReveal() 

  return ( 
    <div 
      ref={ref} 
      className={clsx( 
        'fade-in', 
        visible && 'visible', 
        className 
      )} 
    > 
      {children} 
    </div> 
  ) 
} 

export default Reveal 
