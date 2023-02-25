import React from "react";
import { useState, useEffect, useCallback } from "react";
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar"
import  { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { BiCart} from "react-icons/bi"


const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

export default function Homepage() {



 //RECIPE FUNCTION
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  
  
  const fetchRecipe = useCallback (async () => {
    const url = apiUrl + query
    const response = await fetch(url)
    const data = await response.json();
    setRecipes(data.meals);
  }, [query])
  
  useEffect(() => {
    fetchRecipe();
  }, [fetchRecipe])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipe();
  }
  

  let navigate = useNavigate();


  const cart = useSelector((state) => state.cart)
  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  
  
  
  
  return (
      <> 
      
        <Navbar />
        
           <div  onClick={() => navigate('/cart')}>
            <BiCart style={{ color:'#000'  }}/>
            <p>{getTotalQuantity() || 0}</p>
          </div>
     
         <SearchBar
            value={query}
            handleSubmit={handleSubmit}
            onChange={e => setQuery(e.target.value)}
         />
         
         <div>
           <button onClick={() => {navigate(`/beefpage`)}}>BEEF</button>
          </div>
  
              <h1>RECIPES</h1>
              <div className="recipe-container">
                  <div className="recipes">
                   {recipes ? recipes.map(recipe => (
                       <Recipe
                          id={recipe.idMeal}
                          recipe={recipe}
                          
                       />
                   )): "No Recipes Found!"}
                   </div>
             </div>
          
      </>
    )
}