import {  removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import './CartItem.scss'


function CartItem({id, thumbnail , title, price, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <div className="favoriteItem">
          <img className="favoriteItem__image" src={thumbnail} alt='item'/>
         
            <p className="favoriteItem__title">{title}</p>
            
            <button
              className='favoriteItem__removeButton' 
              onClick={() => dispatch(removeItem(id))}>
                Remove
            </button>

    </div>
  )
}

export default CartItem