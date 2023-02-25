import React from "react";
import  { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {addToCart} from './redux/cartSlice';

export default function Recipe({recipe}) {
  const {idMeal, strMeal, strCategory, strMealThumb } = recipe
    let navigate = useNavigate();

    
    const dispatch = useDispatch()
  return (
      <> 

           <div className="card" >
             <img 
                 src={strMealThumb} 
                 alt={strMeal}
                 className="card-image"
             />
             
             <div className="card-body">
                <p className="category">{strCategory}</p>
                <h3 className="name">{strMeal}</h3>
               <button onClick={() => {navigate(`/${idMeal}`)}}>RECIPE</button>              
                <button 
                  onClick={() => 
                    dispatch(addToCart({
                      idMeal, strMeal, strCategory, strMealThumb
                    }))
                  }>Add to Favorite
                </button>
             </div>   
           </div>

      </>
      
    )
}