import React from "react";
import './Homepage.scss';
import { useState, useEffect, useCallback } from "react";
import Recipe from "../components/Recipe";
import SearchBar from "../components/SearchBar";
import  { useNavigate } from "react-router-dom";



import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero4.png';
import hero3 from '../assets/hero2.png';
import hero4 from '../assets/hero6.png';



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
  


  
  
  return (
      <> 
    
    <div className='hero'>
         <div>
            <h1 className='hero__text__h1'>Get delicious recipes for any occasion</h1>
            <SearchBar
                value={query}
                handleSubmit={handleSubmit}
                onChange={e => setQuery(e.target.value)}
             />
         </div>
         
           <div className='food__image__cont'>
               <img src={hero1} className='food__image' alt='food'/>
               <img src={hero2} className='food__image' alt='food'/>
               <img src={hero3} className='food__image' alt='food'/>
               <img src={hero4} className='food__image' alt='food'/>
            </div>

    </div>
    
        
         
         <div className='category__button__cont'>
           <button className='category__button' onClick={() => {navigate(`/beefpage`)}}>
             Beef
             <img src='https:\/\/www.themealdb.com\/images\/category\/beef.png' className='category_button_image' alt='food'/>
           </button>
           
           <button className='category__button' onClick={() => {navigate(`/chicken`)}}>
             Chicken
             <img src='https:\/\/www.themealdb.com\/images\/category\/chicken.png' className='category_button_image' alt='food'/>
           </button>
           
           <button className='category__button' onClick={() => {navigate(`/dessert`)}}>
             Dessert
             <img src='https:\/\/www.themealdb.com\/images\/category\/dessert.png' className='category_button_image' alt='food'/>
           </button>
           
           <button className='category__button' onClick={() => {navigate(`/seafood`)}}>
              Seafood
              <img src='https:\/\/www.themealdb.com\/images\/category\/seafood.png' className='category_button_image' alt='food'/>
           </button>
           <button className='category__button' onClick={() => {navigate(`/vegan`)}}>
             Vegan
             <img src='https:\/\/www.themealdb.com\/images\/category\/vegan.png' className='category_button_image' alt='food'/>
           </button>
          </div>
  


              <div className="recipes">
                   {recipes ? recipes.map(recipe => (
                       <Recipe
                          id={recipe.idMeal}
                          recipe={recipe}
                          
                       />
                   )): "No Recipes Found!"}
              </div>

          
      </>
    )
}