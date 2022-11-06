import React from "react";

export default function Recipe({recipe}) {
  const {idMeal, strMeal, strCategory, strMealThumb } = recipe
  
  
  return (
      <> 

           <div className="card">
             <img 
                 src={strMealThumb} 
                 alt={strMeal}
                 className="card-image"
             />
             
             <div className="card-body">
                <p className="category">{strCategory}</p>
                <h3 className="name">{strMeal}</h3>
                <a className="recipe-btn" href={"https://www.themealdb.com/meal/" + idMeal} alt="" >RECIPE</a>
             </div>   
           </div>

      </>
      
    )
}