import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Work from './Components/Work'
import PlayReel from './Components/PlayReel'
import Pictures from './Components/Pictures'
import Spread from './Components/Spread'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './Components/Footer'


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full font-["Lausanne"]'>
      <Navbar />
      <Landing />
      <Work />
      <PlayReel />
      <Pictures />
      <Spread />
      <Footer />
    </div>
  )
}

export default App