import './Cart.scss'
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

function Cart() {

  const cart = useSelector((state) => state.cart)

  return (
    <div className="favorite">
        <div>
              <h3>FAVORITES</h3>
              {cart?.map((item) => (
                <CartItem
                  key={item.idMeal}
                  id={item.idMeal}
                  thumbnail={item.strMealThumb}
                  title={item.strMeal}
                  price={item.strCategory} 
                  quantity={item.quantity}
                />
              ))}
      </div>


    </div>
  )
}

export default Cart