// useFetchProducts.js

import { useState, useEffect } from "react";

export const useFetchProducts = (selectedCategoryName, searchQuery) => {
  const [categorisedProducts, setCategorisedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        let url;
        if (selectedCategoryName === 'Meals') {
          url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
        } else {
          url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`;
        }

        const response = await fetch(url);
        if (response.ok) {
          const productData = await response.json();
          let realProd;
          if (selectedCategoryName === 'Meals') {
            realProd = productData.categories;
          } else {
            realProd = productData.drinks;
          }

          const filteredProducts = realProd.filter(prod => {
            const searchField = selectedCategoryName === 'Meals' ? 'strCategory' : 'strDrink';
            return prod[searchField] && prod[searchField].toLowerCase().includes(searchQuery.toLowerCase());
          });

          setCategorisedProducts(filteredProducts);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          throw new Error("Can't fetch the products");
        }
      } catch (error) {
        setError("Can't fetch the products");
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [selectedCategoryName, searchQuery]);

  return [categorisedProducts, isLoading, error];
};

