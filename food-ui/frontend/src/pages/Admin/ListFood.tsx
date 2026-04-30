import React from 'react'
import './ListFood.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { deleteFood, getFoodList } from '../../services/FoodService';

const ListFood = () => {
  const [list, setList] = React.useState([]);
  const fetchFoodList = async () => {
    try {
      const foodList = await getFoodList();
      setList(foodList);
    } catch (error) {
      toast.error('Failed to fetch food list. Please try again.');
    }
  };

  const removeFood = (id: number) => async () => {
    try {
      await deleteFood(id);
      toast.success('Food deleted successfully');
      await fetchFoodList();
    } catch (error) {
      toast.error('An error occurred while deleting the food.');
    }
  };


  React.useEffect(() => {
    fetchFoodList();
  }, []);


  return (
    <div className="py-5 row justify-content-center">
      <div className="col-11 card">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item: any, index: number) => (
              <tr key={item.id}>
                <td>
                  <img src={item.imgUrl} alt={item.name} className="food-image me-2" />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>                
                <td><i className="bi bi-currency-rupee"></i>{item.price.toFixed(2)}</td>
                <td>
                  <button className="btn btn-danger" onClick={removeFood(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default ListFood
