import React from "react";
import  { useNavigate } from "react-router-dom";


export default function Recipe({recipe}) {
  const {idMeal, strMeal, strCategory, strMealThumb } = recipe
    let navigate = useNavigate();
  
  return (
      <> 

           <div className="card" key={idMeal} >
             <img 
                 src={strMealThumb} 
                 alt={strMeal}
                 className="card-image"
             />
             
             <div className="card-body">
                <p className="category">{strCategory}</p>
                <h3 className="name">{strMeal}</h3>
               <button onClick={() => {navigate(`/${idMeal}`)}}>RECIPE</button>
             </div>   
           </div>

      </>
      
    )
}