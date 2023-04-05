import React from "react";
import './SearchBar.scss'



export default function SearchBar({ handleSubmit, value, onChange }) {
  
  return (
      <>
        <form onSubmit={handleSubmit}>
            <input
               value={value}
               onChange={onChange}
               placeholder="Chicken"
               className="search-bar"
            />
            
            <input 
               type="submit"
               value="Search"
               className="submit_btn"
            />
        </form>
      </>
    )
}