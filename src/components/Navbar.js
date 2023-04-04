import React from "react";
import './Navbar.scss';
import { BsTwitter  } from 'react-icons/bs';
import {  AiFillHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi"

import  { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { BiCart} from "react-icons/bi"



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
    <nav className="navbar navbar-expand-lg ">
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
          <a className="nav-link active" aria-current="page" href="/category"><BiCategory className="icons"/></a>
        </li>
        
          <div  onClick={() => navigate('/cart')}>
            <BiCart style={{ color:'#000'  }}/>
            <p>{getTotalQuantity() || 0}</p>
          </div>

      </ul>
    </div>
  </div>
</nav>
    </>
    )
}