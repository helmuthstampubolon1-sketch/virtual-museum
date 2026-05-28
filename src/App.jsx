import SmoothScroll from './components/SmoothScroll' 
import AudioPlayer from './components/AudioPlayer' 

import Entrance from './sections/Entrance/Entrance' 
import Plaque from './sections/Plaque/Plaque' 
import Portraits from './sections/Portraits/Portraits' 
import LittleThings from './sections/LittleThings/LittleThings' 
import Archive from './sections/Archive/Archive' 
import Letter from './sections/Letter/Letter' 
import Ending from './sections/Ending/Ending' 

function App() { 

  return ( 
    <SmoothScroll> 

      <div className="grain-overlay" /> 

      <AudioPlayer />

      <main> 

        <Entrance /> 

        <Plaque /> 

        <Portraits /> 

        <LittleThings /> 

        <Archive /> 

        <Letter /> 

        <Ending /> 

      </main> 

    </SmoothScroll> 
  ) 
} 

export default App 
