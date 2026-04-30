import axios from "axios";

const API_URL = 'http://localhost:8080/api/foods';

interface AddFoodData {
  name: string;
  description: string;
  category: string;
  price: string | number;
}

export const addFood = async (foodData: AddFoodData, image: File) => {
  const formData = new FormData();

  formData.append(
    'food',
    new Blob([
      JSON.stringify({
        name: foodData.name,
        description: foodData.description,
        category: foodData.category,
        price: Number(foodData.price)
      })],
      { type: 'application/json' }
    )
  );

  formData.append('file', image);

  try {
    const response = await axios.post(API_URL, formData);
    return response.data;
  } catch (error) {
    console.error('Error adding food:', error);
    throw error;
  }
};
export const getFoodList = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching food list:', error);
    throw error;
  }
};
export const deleteFood = async (id: number) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting food:', error);
    throw error;
  }
};

