import React from "react";
import { useState } from "react";
import { useParams  } from "react-router-dom";



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
  


    
  return (
    <>

         {
              (!item) ? `404 NOT FOUND ${MealId}` : (
                        <div key={item.idMeal}> 
                               <img src={item.strMealThumb} alt="..." />
                               <h1>Hey yo{MealId}</h1>
                              <div className="">
                                <p className="">{item.strMeal}</p>
                                <p className="">{item.strIngredient1}</p>
                                <p className="">{item.strInstructions}</p>
                             </div>   
                        </div>
                )
            }

    </>  
    )
}