import React from 'react'
import GradientText from './GradientText.jsx'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='heroSide'>
                 </div>  
        <div className='heroMain'>
         <div className='heroMainText'>Hi , There  <br></br>I am Avinash, <br/>And I create 
         <GradientText text={'Stuning Web Expreiences'}/>
           
        </div>
         <div className='heroMainSub'>Unleash creativity with animations and interactivity,  <br/> your ultimate solution for creating awesome websites . </div>
        </div>
    </div>
  )
}

export default Hero