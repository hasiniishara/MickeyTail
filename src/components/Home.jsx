// Home.js

import React, { useState } from 'react';
import { CategoryList } from './CategoryList';
import { useFetchProducts } from '../hooks/useFetchProducts';

export const Home = () => {
  const categories = [
    {
      id: 1,
      name: "Meals"
    },
    {
      id: 2,
      name: "Cocktails"
    }
  ];

  const [selectedCategoryName, setSelectedCategoryName] = useState('Meals');
  const [searchQuery, setSearchQuery] = useState('');
  const [categorisedProducts, isLoading, error] = useFetchProducts(selectedCategoryName, searchQuery);
  
  const onSelectCategory = (clickCategoryName) => {
    setSelectedCategoryName(clickCategoryName);
  };

  const handleSearch = () => {
    setSearchQuery(searchQuery);
  };

  return (
    <>
      <div className='search-bar'>
        <input 
          type="text" 
          id="search" 
          placeholder="Search..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="home">
        <CategoryList 
          categories={categories}
          onSelectCategory={onSelectCategory}
        />
        <div className='products-container'>
          {error && 
            <div>
              {error}
            </div>
          }
          {isLoading ? (
            <div className='loader'></div>
          ) : (
            categorisedProducts.map((realProd) => (
              <div key={selectedCategoryName === 'Meals' ? realProd.idCategory : realProd.idDrink} className='product-box'>
                <img src={selectedCategoryName === 'Meals' ? realProd.strCategoryThumb : realProd.strDrinkThumb} alt={selectedCategoryName === 'Meals' ? realProd.strCategory : realProd.strDrink} />
                <h3>{selectedCategoryName === 'Meals' ? realProd.strCategory : realProd.strDrink}</h3>
                <p>Price: 5€</p>
                <button>See Details</button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

