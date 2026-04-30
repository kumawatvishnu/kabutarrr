import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext'

type FoodItemProps = {
  id: string
  name: string
  price: number
  description: string
  image: string
}

const FoodItem: React.FC<FoodItemProps> = ({ id, name, price, description, image }) => {
    
    const context = useContext(StoreContext);
    const cartItems = context?.cartItems || {};
    const addToCart = context?.addToCart || (() => {});
    const removeFromCart = context?.removeFromCart || (() => {});

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt={name} />
        {!cartItems[id] 
            ? <img className='item-add' onClick={() => addToCart(id)}  src={assets.add_icon_white} alt="add" /> 
            : <div className='food-item-counter'>
                <img className='food-item-remove-icon' onClick={() => removeFromCart(id)}  src={assets.remove_icon_red} alt="remove" />
                <p>{cartItems[id]}</p>
                <img className='food-item-add-icon' onClick={() => addToCart(id)} src={assets.add_icon_green} alt="add" />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" className='food-item-rating' />
        </div>
      </div>
      <p className='food-item-descr'>{description}</p>
      <p className='food-item-price'>Rs {price.toFixed(2)}</p>
    </div>
  )
}

export default FoodItem