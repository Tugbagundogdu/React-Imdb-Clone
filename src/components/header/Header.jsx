import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
       <Link to="/"><img className='imdb' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /></Link>
      <Link to="/popular">Popular</Link>
      <Link to="/toprated">Top Rated</Link>
      <Link to="/upcoming">UpComing</Link>     
    </div>
    
  )
}

export default Header
