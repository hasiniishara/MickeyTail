import React, { useState } from 'react'
import { CategoryList } from './CategoryList'

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

  const [selectedCategoryName, setSelectedCategoryName] = useState('Meals');

  const onSelectCategory = (clickCategoryName) =>{

    setSelectedCategoryName(clickCategoryName);

  }

  return (
  <>
      <div className='search-bar'>
        <input type="text" id="search" placeholder="Search..."/>
        <button onclick="search()">Search</button>
      </div>   
      <div className="home">
          <CategoryList 
            categories = {categories}
            onSelectCategory= {onSelectCategory}
          />
      </div>
    </>
  )
}


