import React from "react"
import { BsTwitter, BsFacebook,  } from 'react-icons/bs';
import { AiFillInstagram, AiFillHome } from "react-icons/ai";
import { BiCategory , BiCart} from "react-icons/bi"
import { useSelector } from 'react-redux'
import  { useNavigate } from "react-router-dom";

export default function Navbar() {

  let navigate = useNavigate();
  
  const cart = useSelector((state) => state.cart)
  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light ">
    <div className="container">
    <a className="navbar-brand" href="/">FOOD RECIPE</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><AiFillHome className="icons"/></a>
        </li>
        
         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://twitter.com/OladunniCath" target="_blank" rel="noreferrer"><BsTwitter className="icons"/></a>
        </li>
        
        
         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><BsFacebook className="icons"/></a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><AiFillInstagram className="icons"/></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/category"><BiCategory className="icons"/></a>
        </li>

        <li>
        <div className='shopping-cart' onClick={() => navigate('/cart')}>
            <BiCart id='cartIcon'/>
            <p>{getTotalQuantity() || 0}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
    )
}