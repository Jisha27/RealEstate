import React from 'react'
import apt1 from '../Assets/henry-becerra-jsHk0zJfvSc-unsplash.jpg'
import apt2 from '../Assets/pierre-chatel-innocenti-gxyeia7Syuk-unsplash.jpg'
import apt3 from '../Assets/thepowercouple-FAhAg0aT6ro-unsplash.jpg'
import './Best.css'
export default function Best() {
  return (
    <div className='b-wrapper'>
       <h1>Best Rated Properties</h1> 
       <div className='b-sub'>
          <span>All</span>
          <span>Commercial</span>
          <span>Residential</span>
          <span>Agricultural</span>
       </div>
       <div className='b-img'>
       <img src={apt1} alt='img'/>
       <img src={apt2} alt='img'/>
       <img src={apt3} alt='img'/>
       </div>
       <button className='btn'>View All</button>
    </div>
  )
}
