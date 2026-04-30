import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets.ts'

type ExploreMenuProps = {
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
}

type MenuItem = {
  menu_name: string
  menu_image: string
}

const ExploreMenu: React.FC<ExploreMenuProps> = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes
      </p>
      <div className='explore-menu-list'>
        {(menu_list as MenuItem[]).map((item, index) => (
          <div className='explore-menu-list-item' key={`${item.menu_name}-${index}`}>
            <div className='explore-menu-img-container'>
              <img
                className={category === item.menu_name ? 'active' : ''}
                src={item.menu_image}
                alt={item.menu_name}
                onClick={() => setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))}
              />
            </div>
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu