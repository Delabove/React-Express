import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='landing'>
      <Link to='/table'>View Concert Listings</Link>
    </div>
  )
}

export default Main