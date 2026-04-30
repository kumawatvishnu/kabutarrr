import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const context = useContext(StoreContext);
  const cartItems = context?.cartItems || {};
  const food_list = context?.foodList || [];
  const removeFromCart = context?.removeFromCart || (() => {});
  const getTotalCartAmount = context?.getTotalCartAmount || (() => 0);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item) => {
          if(cartItems[item.id]) {
            return (
              <div>
                <div className="cart-items-title cart-items-item" key={item.id}>
                <img src={item.imgUrl} alt={item.name} className='cart-item-image' />
                <p>{item.name}</p>
                <p>RS {item.price.toFixed(2)}</p>
                <p>{cartItems[item.id]}</p>
                <p>RS {(item.price * cartItems[item.id]).toFixed(2)}</p>
                {/* <button onClick={() => removeFromCart(item._id)}>Remove</button> */}
                <p onClick={() => removeFromCart(item.id)} className='cross'>X</p>
              </div>
              <hr/>
              </div>              
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>RS {getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>RS {2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>RS { (2 + getTotalCartAmount()).toFixed(2) }</b>
            </div>
            <hr />
          </div>
          <button onClick={()=> navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Have a promo code?</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Enter promo code' />
              <button>Apply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart