import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay: React.FC<{ category: string }> = ({ category }) => {
    const context = useContext(StoreContext);
    const food_list = context?.foodList || [];
    
  return (
    <div className='food-display' id='food-display'>
        <h2>Top Dishes near your Location</h2>
        <div className='food-display-list'>
            {food_list.map((item, index) => {
                if(category === 'All' || item.category === category) {
                    return (
                    <FoodItem 
                        key={`${item.id}-${index}`}
                        id={item.id} 
                        name={item.name} 
                        price={item.price} 
                        description={item.description} 
                        image={item.imgUrl} 
                    />)
                }                
            })}
        </div>
    </div>
  )
}

export default FoodDisplay