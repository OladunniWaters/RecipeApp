import './Cart.scss'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

function Cart() {

  const cart = useSelector((state) => state.cart)

  return (
    <div className="favorite">
        <div>
              <h3 className='cart_title'>FAVORITES</h3>
              { cart ?  cart.map((item) => (
                <CartItem
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

export default Cart