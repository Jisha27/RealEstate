import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './Hero.css'
export default function Hero() {
  return (
    <div className='hero'>
        <div className='content'>
          <h1>Home Sweet Home</h1>
          <p className='search-text'>Search the largest selection of luxury high-rise apartments ,multi-family homes and luxury homes</p>
          <form className='search'>
             <div> 
                <input type='text' placeholder='Enter Keyword..'></input>
             </div>
             <div className='radio'>
                <input type='radio' checked/>
                <label>Buy</label>
                <input type='radio' checked/>
                <label>Rent</label>
                <button type='submit' className='btn'><AiOutlineSearch className='s-icon'/></button>
             </div>
          </form>
        </div>

    </div>
  )
}
