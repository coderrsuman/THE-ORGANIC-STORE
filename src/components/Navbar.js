import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {

    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + (curr.price || curr.amount * 7.5 || curr.id * 0.0005), 0));
    }, [cart]);


  return (
    <nav className="bg-white w-full font-sans h-20 mx-auto flex justify-between text-[#333333] font-medium">
        <div className="flex space-x-10 ml-7 mt-4 items-center">
            <NavLink to="/">
                <div className="">
                    <img src="../organic_store_logo.jpeg" className="h-[4.4rem]"></img>
                </div>
            </NavLink>
            <div className="flex">
                <NavLink to="/everything">
                    <div className="hover:text-[#8bc34a] transition ease-in duration-100">Everything</div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/grocery">
                    <div className="hover:text-[#8bc34a] transition ease-in duration-100">Groceries</div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/essentials">
                    <div className="hover:text-[#8bc34a] transition ease-in duration-100">Essentials</div>
                </NavLink>
            </div>
        </div>
        <div className="flex gap-x-10 mr-10 mt-4 items-center">
            <div>
                <NavLink to="/about">
                    <div className="hover:text-[#8bc34a] transition ease-in duration-100">About</div>
                </NavLink>
            </div>
            <div>
                <NavLink to="/contact">
                    <div className="hover:text-[#8bc34a] transition ease-in duration-100">Contact</div>
                </NavLink>
            </div>
            <div className="flex items-center gap-3">
                <div className="text-[#8bc34a]">
                    <p>${totalAmount.toFixed(2)}</p>
                </div>
                <div>
                    <NavLink to="/cart">
                        <div>
                            <FaShoppingCart className="text-[#333333] hover:text-[#8bc34a] text-xl transition ease-in duration-100"/>
                            {
                                cart.length > 0 && 
                                <span className="absolute top-8 right-[5.5rem] bg-[#8bc34a] font-semibold text-[0.75rem] w-4 h-4 flex justify-center items-center animate-bounce rounded-full text-white">
                                    {cart.length}
                                </span>
                            }
                        </div>
                    </NavLink>
                </div>
            </div>  
            <div>
                <FaUser className="hover:text-[#8bc34a] transition ease-in duration-100"/>
            </div>
        </div>
        
    </nav>
  )
}

export default Navbar