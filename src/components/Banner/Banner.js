import React from 'react'
import worldcup from '../../assets/world-cup.jpg';
import './Banner.css'
const Banner = () => {
  return (
    <div className='banner'>
        <div className="image"><img src={worldcup} alt="ICC World Cup" /></div>
        <h3 className='contents'>The Cricket World Cup (officially known as ICC Men's Cricket World Cup)[2] is the international championship of One Day International (ODI) cricket. The event is organised by the sport's governing body, the International Cricket Council (ICC), every four years, with preliminary qualification rounds leading up to a finals tournament. The tournament is one of the world's most viewed sporting events and is considered the "flagship event of the international cricket calendar" by the ICC.[3]</h3>  
    </div>
  )
}

export default Banner;