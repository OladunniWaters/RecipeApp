import './BeefCategory.scss'
import { useState, useEffect} from "react";
import Recipe from "./Recipe";





const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef"

export default function BeefCategory() {
  
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

              <h1 className='category_header'>BEEF CATEGORY</h1>
              
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