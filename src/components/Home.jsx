import React from 'react'

export const Home = () => {

  const categories = [
    {
      id:1,
      name: "Meals"
    },
    {
      id:2,
      name: "Cocktails"
    }
  ]
  
  return (
    <div>
      <div className='search-bar'>
        <input type="text" id="search" placeholder="Search..."/>
        <button onclick="search()">Search</button>
      </div>
    </div>
  )
}


