import React from "react";
import './Navbar.scss';
import { BsTwitter, BsGithub, BsFillBagHeartFill } from 'react-icons/bs';
import  { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';




export default function Navbar() {
  let navigate = useNavigate();


  
  return (
    <>
    <nav className="navbar navbar-expand-lg ">
    <div className="container">
    <a className="navbar-brand" href="/">Waters</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <RxHamburgerMenu className='navbar-toggler-icon'/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
         <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://twitter.com/OladunniCath" target="_blank" rel="noreferrer"><BsTwitter className="icons"/></a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/category"><BsGithub className="icons"/></a>
        </li>
        
          <div className='favoriteIcon_cont' onClick={() => navigate('/cart')}>
              <BsFillBagHeartFill className='heart_icon' />
          </div>

      </ul>
    </div>
  </div>
</nav>
    </>
    )
}