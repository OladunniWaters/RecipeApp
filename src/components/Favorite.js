import './Favorite.scss'
import FavoriteRecipe from '../components/FavoriteRecipe'
import { useSelector } from 'react-redux'

function Favorite() {

  const favorite = useSelector((state) => state.favorite)

  return (
    <div className="favorite">
        <div>
              <h3 className='cart_title'>FAVORITES</h3>
              { favorite ?  favorite.map((item) => (
                <FavoriteRecipe
                  key={item.idMeal}
                  id={item.idMeal}
                  thumbnail={item.strMealThumb}
                  title={item.strMeal}
                  category={item.strCategory} 
                  quantity={item.quantity}
                />
              )) : `Add Recipes to favorite`  }
      </div>


    </div>
  )
}

export default Favorite