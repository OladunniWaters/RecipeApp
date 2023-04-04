import React from "react";
import './RecipeInfo.scss'
import { useState } from "react";
import { useParams  } from "react-router-dom";
import { TfiYoutube } from 'react-icons/tfi';


export default function Details() {
  const [ item , setItem ] = useState()
  const { MealId } = useParams();   
  
  if(MealId!=='') {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
    .then(response => response.json())
    .then(data => {
      setItem(data.meals[0])
    })
  }
  

//`"https:\/\/www.youtube.com\/watch?v=4aZr5hZXP_s" `
    
  return (
    <>

         {
              (!item) ? `404 NOT FOUND ${MealId}` : (
                        <div className='container info_cont' key={item.idMeal}> 
                        
                           <div className='info_image_ingre'>
                           
                              <div className='info_image_cont'>
                                 <img src={item.strMealThumb} alt="..." className='info_image'/>
                               </div>
                               
                              <div className="info_ingredient_cont">
                                    <p className="info_title">{item.strMeal}</p>
                                    <div className='info_tags_cont'>
                                       <p className="info_category">{item.strCategory}</p>
                                       <p className="info_area">{item.strArea}</p>
                                       <a className="info_youtube" href={item.strYoutube} target='_blank' rel="noreferrer"><TfiYoutube /></a>
                                    </div>
                                    <p className='info_ingredient_title'>INGREDIENTS</p>    
                                    <ul className='info_ingredient_ul'>
                                         <li className='info_ingredient_li'>{item.strMeasure1} of {item.strIngredient1}</li>
                                          <li className='info_ingredient_li'>{item.strMeasure2} of {item.strIngredient2}</li>
                                          <li className='info_ingredient_li'>{item.strMeasure1} of {item.strIngredient3}</li>
                                          <li className='info_ingredient_li'>{item.strMeasure2} of {item.strIngredient4}</li>
                                          <li className='info_ingredient_li'>{item.strMeasure1} of {item.strIngredient5}</li>
                                          <li className='info_ingredient_li'>{item.strMeasure2} of {item.strIngredient6}</li>
                                          <li className='info_ingredient_li'>{item.strMeasure1} of {item.strIngredient7}</li>
                                          <li className='info_ingredient_li'>{item.strMeasure2} of {item.strIngredient8}</li>
                                          <li className='info_ingredient_li'>{item.strMeasure1} of {item.strIngredient9}</li>
                                          <li className='info_ingredient_li'>{item.strMeasure2} of {item.strIngredient10}</li>
                                    </ul>
                              </div>   
                          </div>
                             
                               
                            <div className='info_instructions_cont'>   
                                <h3 className='info_instructions_title'>INSTRUCTIONS</h3>  
                                <p className="info_instructions">{item.strInstructions}</p>
                             </div> 
            
                        </div>
                )
            }

    </>  
    )
}