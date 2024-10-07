import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center p-4 border-b-2 border-gray-200 box-shadow-md'>
        <div className='text-2xl font-bold '>Hackathon</div>
        <div className='flex gap-4 text-xl'>
          <Link to='/'>Home</Link>
          <Link to='/'>Problems</Link>
          <Link to='/'>Leaderboard</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar