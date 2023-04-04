import React from "react";
import './Recipe.scss'
import  { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import { BsFillHeartFill } from 'react-icons/bs';



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
                <div className='card_text_cont'>
                    <p className="category">{strCategory}</p>
                    <h3 className="name">{strMeal}</h3>
                </div>
                
                
                <div className='card_button_cont'>
                
                    <button 
                     className='favorite_button'
                      onClick={() => 
                        dispatch(addToCart({
                          idMeal, strMeal, strCategory, strMealThumb
                        }))
                      }>
                      <BsFillHeartFill />
                    </button>
                
                   <button className='recipe_button' onClick={() => {navigate(`/${idMeal}`)}}>
                      RECIPE
                   </button>      
                   
                </div>
                
             </div>   
           </div>

      </>
      
    )
}