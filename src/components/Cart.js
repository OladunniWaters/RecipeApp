
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

function Cart() {

  const cart = useSelector((state) => state.cart)

  return (
    <div className="cart">
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
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


    </div>
  )
}

export default Cart