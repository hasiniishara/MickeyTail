import React from 'react'

export const CategoryList = ({categories, onSelectCategory}) => {
  return (
    <>
        <div className="categories-row">
          {
            categories.map((item)=> (
              <div className='category' key={item.id} onClick={()=>onSelectCategory(item.name)}>
                  <p>{item.name}</p>
              </div>
            ))
          }
        </div>
    </>
  )
}

