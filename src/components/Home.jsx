import React from 'react'

export const Home = () => {
  return (
    <div>
      <div className='search-bar'>
        <input type="text" id="search" placeholder="Search..."/>
        <button onclick="search()">Search</button>
      </div>
    </div>
  )
}


