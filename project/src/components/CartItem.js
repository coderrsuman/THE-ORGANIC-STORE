import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item}) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item Removed From Cart");
    }

    const imageUrl =  item.image.startsWith('https://fakestoreapi.com') ? item.image : `https://spoonacular.com/cdn/ingredients_250x250/${item.image}`;

    return (
        <div className="w-full border-b py-4 flex items-center select-none">
            <div className="flex items-center justify-center h-36 w-36 mr-4">
                <img src={imageUrl} className='h-16 w-16'/>
            </div>
            <div className="flex flex-col">
                <h1 className="text-lg font-semibold">{item.name || item.title.substring(0, 35) + `...`}</h1>
                <p className="text-[#333333] text-md">${(item.amount * 7.5 || item.price || item.id * 0.0005).toFixed(2)}</p>
            </div>
            <div className="ml-auto text-[#333333] hover:text-red-600 cursor-pointer" onClick={removeFromCart}>
                <MdDelete className="w-8 h-8" />
            </div>
        </div>
    )
}

export default CartItem