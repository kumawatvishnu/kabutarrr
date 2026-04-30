import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets.ts'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext.tsx'

type NavbarProps = {
  setShowLoginPopup: (show: boolean) => void
}

const Navbar: React.FC<NavbarProps> = ({ setShowLoginPopup }) => {
    const [menu, setMenu] = useState('home')
    const context = useContext(StoreContext);
    const getTotalCartAmount = context?.getTotalCartAmount || (() => 0);
  return (
    <div className='navbar'>
        <Link to='/'>
            <img src={assets.logo} alt="logo" className='logo' />
        </Link>
        <ul className="navbar-menu">
            <li><Link to='/' className={menu === 'home' ? 'active' : ''} onClick={() => setMenu('home')}>Home</Link></li>
            <li><a href='#explore-menu' className={menu === 'menu' ? 'active' : ''} onClick={() => setMenu('menu')}>Menu</a></li>
            <li><a href='#app-download' className={menu === 'mobile-app' ? 'active' : ''} onClick={() => setMenu('mobile-app')}>mobile-app</a></li>
            <li><a href='#about' className={menu === 'about' ? 'active' : ''} onClick={() => setMenu('about')}>About</a></li>
            <li><a href='#footer' className={menu === 'contact' ? 'active' : ''} onClick={() => setMenu('contact')}>Contact</a></li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search" className='search-icon' />
            <div className="navbar-search-icon">
                <Link to='/cart'>
                    <img src={assets.basket_icon} alt="basket" className='basket-icon' />
                </Link>
                <div className={getTotalCartAmount() ? 'dot' : ''}></div>
            </div>
            <button onClick={()=>setShowLoginPopup(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar