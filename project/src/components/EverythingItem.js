import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/CartSlice";
import {toast} from 'react-hot-toast';

const EverythingItem = ({item}) => {

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    function addToCart(){
        dispatch(add(item));
        toast.success("Item Added to Cart");
    }

    function removeFromCart(){
        dispatch(remove(item.id));
        toast.error("Item Removed from Cart");
    }

  return (
    <div className="bg-white cursor-pointer mx-auto flex flex-wrap mb-10 hover:scale-105 transition 
        duration-300 ease-in shadow-lg w-72 justify-center items-center rounded-lg">
        <div className="p-7 flex flex-col justify-center items-center font-merriweather">
            <div>
                <img src={`https://spoonacular.com/cdn/ingredients_250x250/${item.image}`} className='h-60 w-52 mb-2'></img>
            </div>
            <div className="font-merriweather text-[#333333] text-md font-semibold uppercase mb-2">{item.name}</div>
            <div className="font-medium text-[#333333] text-md mb-5">${(item.id * 0.0005).toFixed(2)}</div>
            {
                cart.some((p) => p.id === item.id) ? 
                (
                    <button onClick={removeFromCart} className="bg-[#c62828] transition ease-in duration-200 hover:bg-[#e53935] flex items-center gap-x-2 uppercase font-semibold text-white pl-3 pr-3 pt-3 pb-3 rounded-md ">
                        <FaShoppingCart />
                        <p>Remove From Cart</p>
                    </button>
                ) :
                (
                    <button onClick={addToCart} className="bg-[#508810e1] transition ease-in duration-200 hover:bg-[#8bc34a] flex items-center gap-x-4 uppercase font-semibold text-white pl-5 pr-5 pt-3 pb-3 rounded-md ">
                        <FaShoppingCart />
                        <p>Shop Now</p>
                    </button>
                )
            }
        </div>
    </div>
  )
}

export default EverythingItem;