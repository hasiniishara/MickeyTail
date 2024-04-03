import { useState, useEffect } from "react"

export const useFetchProducts = (selectedCategoryName) =>{

    const [categorisedProducts, setCategorisedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(()=>{
        setIsLoading(true)
        const fetchProduct = async () => {
          try{
            let url;
            if(selectedCategoryName === 'Meals') {
               url = `https://www.themealdb.com/api/json/v1/1/categories.php`
            }else{
              url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`
            }

            const response = await fetch(url)
            if(response.ok){
              let realProd;
              const product = await response.json()
              if(selectedCategoryName === 'Meals'){
                realProd = product.categories;
              }else{
                realProd = product.drinks;
              }
              
              setCategorisedProducts(realProd)
              setIsLoading(false)
            }else{
              setIsLoading(false)
              throw new Error("Can't fetch the products")
            } 
          } 
          catch(error){
            setError("Can't fetch the products")
            setIsLoading(false)
          }
        }
        fetchProduct()
    }, [selectedCategoryName])

    return [categorisedProducts, isLoading, error]
}