import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";
//import { food_list } from "../assets/frontend_assets/assets";
import axios from "axios";

type FoodListItem = {
    id: string;
    name: string;
    imgUrl: string;
    price: number;
    description: string;
    category: string;
}

type StoreContextType = {
    foodList: FoodListItem[];
    cartItems: { [key: string]: number };
    setCartItems: Dispatch<SetStateAction<{ [key: string]: number }>>;
    addToCart: (itemId: string) => void;
    removeFromCart: (itemId: string) => void;
    getTotalCartAmount: () => number;
}

export const StoreContext = createContext<StoreContextType | null>(null);

type StoreContextProviderProps = {
    children: ReactNode;
}

const StoreContextProvider = (props: StoreContextProviderProps) => {
    const [foodList, setFoodList] = useState<FoodListItem[]>([]);

    const fetchFoodList = async () => {
        const response = await axios.get('http://localhost:8080/api/foods');
        setFoodList(response.data);
        console.log(foodList);
    }


    const [cartItems, setCartItems] = useState<{ [key: string]: number }>({});
    const addToCart = (itemId: string) => {
        if(!cartItems[itemId]) {
            setCartItems(prev => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }
    const removeFromCart = (itemId: string) => {
        if(cartItems[itemId]) {
            setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        }
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const itemId in cartItems) {
            if(cartItems[itemId] > 0) {
                const item = foodList.find(product => product.id === itemId);
                if(item) {
                    totalAmount += item.price * cartItems[itemId];
                }
            }
        }
        return totalAmount;
    }

    const contextValue: StoreContextType = {
        foodList,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    }
    useEffect(() => {
        async function fetchData() {
            await fetchFoodList();
        }
        fetchData();
    }, []);
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;