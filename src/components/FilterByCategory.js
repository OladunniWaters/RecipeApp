import React from "react";
import { useState, useEffect} from "react";
import Recipe from "./Recipe";
import Navbar from "./Navbar"




const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"

export default function Category() {
  
 //RECIPE FUNCTION

  const [category, setCategory] = useState([]);
  
  
  const fetchRecipe = async () => {
    const url = apiUrl
    const response = await fetch(url)
    const data = await response.json();
    setCategory(data.meals);
  }
  
  useEffect(() => {
    fetchRecipe();
  }, [])
  


  
  
  return (
      <> 
      
        <Navbar />
         
 
              <h1>Filter by category</h1>
              <div className="recipe-container">
                  <div className="recipes">
                   {category.map(recipe => (
                       <Recipe
                          key={recipe.idMeal}
                          recipe={recipe}
                          
                       />
                   ))}
                   </div>
             </div>
          
          
         
         
      </>
    )
}