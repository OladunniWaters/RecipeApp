import {  removeItem} from '../redux/favoriteSlice';
import { useDispatch } from 'react-redux';
import './FavoriteRecipe.scss';
import  { useNavigate } from "react-router-dom";
import { FaTimes} from 'react-icons/fa';



function FavoriteRecipe({id, thumbnail , title, price, category, quantity=0}) {
  const dispatch = useDispatch()
  let navigate = useNavigate();


  return (
    <div className="favoriteItem">
          <img className="favoriteItem__image" src={thumbnail} alt='item'/>
         
            <p className="favoriteItem__title">{title}</p>
             <p className="favoriteItem__category">{category}</p>
             
               <button className='favorite_recipe_button' onClick={() => {navigate(`/${id}`)}}>
                      RECIPE
                </button> 
            
            <button
              className='favoriteItem__removeButton' 
              onClick={() => dispatch(removeItem(id))}>
                <FaTimes />
            </button>

    </div>
  )
}

export default FavoriteRecipe