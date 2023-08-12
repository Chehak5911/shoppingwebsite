import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { remove } from '../redux/slices/CartSlice';

function CartItem({ item, itemIndex, key }) {

    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast("Item Removed From Cart");
    }

    return (

        <div className="flex flex-col items-center justify-between 
        transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl">
            <div>
                <p className="text-black-700 font-semibold text-lg text-center truncate w-40 mt-1"> {item.title} </p>
            </div>
            <div>
                <p className="w-40 text-black-400 font-normal text-[15px] text-center">{item.description}</p>
            </div>
            <div className="h-[180px]">
                <img src={item.image} className="h-full w-full " />
            </div>
            <div className='flex flex-col items-center'>
                <p className="text-green-600 font-semibold">${item.price}</p>
                <button onClick={removeFromCart} >
                    <RiDeleteBin5Line />
                </button>
            </div>
        </div>
)
}

       


export default CartItem;