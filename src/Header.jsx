import React from 'react'
import "./Header.css"
import { Search, ShoppingBasket } from '@material-ui/icons'
const Header = () => {
  return (
    <div className="header">
        <img className='header__logo' src="Alogo.png" alt="" />
   
    <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className='header__searchIcon' />
    </div>
    <div className="header__nav">
        <div className="header__option">
            <span className="header__optionLineone">
                hello
            </span>
            <span className='header__optionLine2'>Sign In</span>
        </div>
        <div className="header__option">
            <span className="header__optionLineone">
                option 2
            </span>
            <span className='header__optionLine2'>Orders</span>
        </div>
        <div className="header__option">
            <span className="header__optionLineone">
                option 3
            </span>
            <span className='header__optionLine2'>Prime</span>
        </div>
        <div className="header__optionBasket">
            <ShoppingBasket/>
            <span className="header__optionline2">

            </span>
        </div>
       
    </div>
    </div>
  )
}

export default Header