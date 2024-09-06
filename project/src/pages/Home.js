import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { TbStarFilled } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="w-full h-screen select-none">
        <div className="flex h-auto w-full mx-auto mt-5 bg-[#f8f6f392]">
            <div className='pt-32 pb-28 w-1/2 flex pl-10 pr-10 items-center'>
                <img src="..\organic-products-hero.png" className='h-9/10 w-full'></img>
            </div>
            <div className="flex w-1/2 pt-32 pb-28 flex-col pl-10 pr-10 items-center">
                <div className="font-merriweather">
                    <img src="..\logo-leaf-new.png" className="mb-8"></img>
                    <h4 className="font-semibold mb-6 text-lg">Best Quality Products</h4>
                    <h2 className="font-semibold text-6xl tracking-normal mb-4">Join The Organic</h2>
                    <h2 className="font-semibold text-6xl tracking-normal mb-6">Movement!</h2>
                    <p className="font-sans mb-6 bg-[#f8f6f392]">
                        Embrace sustainable agriculture for better health, environmental conservation, and local farming. Opt for natural produce to support eco-friendly practices and ensure a healthier future.
                    </p>
                    <div className="font-sans">
                        <NavLink to="/essentials">
                            <button className="bg-[#508810e1] transition ease-in duration-200 hover:bg-[#8bc34a] flex items-center gap-x-4 uppercase font-semibold text-white pl-6 pr-6 pt-3 pb-3 rounded-md ">
                                <FaShoppingCart />
                                <p>Shop Now</p>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="min-h-52 w-full bg-black text-white text-center flex gap-4 items-center justify-around pl-8 pr-8">
            <div className='bg-[#333333] p-5 w-full rounded-sm cursor-pointer'>
                <div className="flex pt-5 gap-2 justify-center items-center">
                    <FaTruck className="text-[#8bc34a] h-6 w-6"/>
                    <p className="font-bold text-xl">Free Shipping</p>
                </div>
                <div className="pb-5">
                    <p className="text-lg pl-4">Above $5 Only</p>
                </div>
            </div>
            <div className='bg-[#333333] w-full p-5 rounded-sm cursor-pointer'>
                <div className="flex pt-5 gap-2 justify-center items-center">
                    <FaAddressBook className="text-[#8bc34a] h-6 w-6"/>
                    <p className="font-bold pr-1 text-xl">Certified Organic</p>
                </div>
                <div className="pb-5">
                    <p className="text-lg">100% Guarantee</p>
                </div>
            </div>
            <div className='bg-[#333333] w-full p-5 rounded-sm cursor-pointer'>
                <div className="flex pt-5 gap-2 justify-center items-center">
                    <FaRegMoneyBillAlt className="text-[#8bc34a] h-6 w-6"/>
                    <p className="font-bold pr-2 text-xl">Huge Savings</p>
                </div>
                <div className="pb-5">
                    <p className="text-lg pl-6">At Lowest Price</p>
                </div>
            </div>
            <div className='bg-[#333333] w-full p-5 rounded-sm cursor-pointer'>
                <div className="flex pt-5 gap-2 justify-center items-center">
                    <FaRecycle className="text-[#8bc34a] h-6 w-6"/>
                    <p className="font-bold pr-6 text-xl">Easy Returns</p>
                </div>
                <div className="pb-5">
                    <p className="text-lg pl-8">No Questions Asked</p>
                </div>
            </div>
        </div>
        <div className="w-full h-auto">
            <div className="w-full bg-[#f8f6f392] mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <h2 className=" mt-20 text-center font-merriweather font-semibold text-4xl tracking-normal mb-8">Trending Products</h2>
                    <img src="..\logo-leaf-new.png" className="mb-12"></img>
                </div>
                <div className="ml-8 mr-8 flex gap-6 justify-center">
                    <div className="flex flex-col">
                        <img src="../bsp-product1.jpg" className='h-72 mb-5'></img>
                        <div class="flex flex-col justify-center items-center">
                            <p className="font-sans font-medium text-sm mb-2 text-[#333333]">Groceries</p>
                            <p className="font-semibold text-lg font-merriweather mb-2">Assorted Coffee</p>
                            <div className="flex mb-1">
                                <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                            </div>
                            <p className="font-sans text-[#333333] text-sm font-bold">$35.00</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src="../orage-juice-kariz-300x300.jpg" className='h-72 mb-5'></img>
                        <div class="flex flex-col justify-center items-center">
                            <p className="font-sans font-medium text-sm mb-2 text-[#333333]">Juice</p>
                            <p className="font-semibold text-lg font-merriweather mb-2">Fresh Orange Juice</p>
                            <div className="flex mb-1">
                                <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                            </div>
                            <p className="font-sans text-[#333333] text-sm font-bold">$18.00</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img src="../bsp-product2.jpg" className='h-72 mb-5'></img>
                        <div className="flex flex-col justify-center items-center">
                            <p className="font-sans font-medium text-sm mb-2 text-[#333333]">Health</p>
                            <p className="font-semibold text-lg font-merriweather mb-2">Hand Sanitizer</p>
                            <div className="flex mb-1">
                                <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                            </div>
                            <p className="font-sans text-[#333333] text-sm font-bold">$15.00</p>
                        </div>
                    </div>
                    <div className="flex flex-col mb-28">
                        <img src="../bsp-product3.jpg" className='h-72 mb-5'></img>
                        <div class="flex flex-col justify-center items-center">
                            <p className="font-sans font-medium text-sm mb-2 text-[#333333]">Groceries</p>
                            <p className="font-semibold text-lg font-merriweather mb-2">Handpicked Red Chillies</p>
                            <div className="flex mb-1">
                                <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                            </div>
                            <p className="font-sans text-[#333333] text-sm font-bold">$19.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="min-h-40 w-full bg-black text-white flex justify-between items-center">
            <div className="ml-7">
                <p className="font-merriweather font-bold text-3xl leading-tight tracking-wide">
                    Get 25% Off On Your First Purchase!
                </p>
            </div>
            <div className="font-sans mr-7">
                <NavLink to="/everything">
                    <button className="bg-[#508810e1] transition ease-in duration-200 hover:bg-[#8bc34a] flex items-center gap-x-4 uppercase font-semibold text-white pl-6 pr-6 pt-3 pb-3 rounded-md ">
                        <FaShoppingCart />
                        <p>Shop Now</p>
                    </button>
                </NavLink>
            </div>
        </div>
        <div className="w-full h-auto mb-28">
            <div className="w-full bg-white mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <h2 className=" mt-20 text-center font-merriweather font-semibold text-4xl tracking-normal mb-10">Customer Reviews</h2>
                    <img src="..\logo-leaf-new.png" className="mb-12"></img>
                </div>
                <div className="flex ml-6 mr-6 gap-6">
                    <div className="flex min-h-52 w-[32%]  rounded-md flex-col items-center justify-center shadow-xl">
                        <div className="pt-16 pb-12 flex text-yellow-400">
                            <TbStarFilled /><TbStarFilled /><TbStarFilled /><TbStarFilled /><TbStarFilled />
                        </div>
                        <p className="font-sans text-md pl-5 pr-5 text-center mb-5">
                            Exceptional organic products! The quality is unmatched, and I love 
                            that everything is sustainably sourced. Customer service was friendly 
                            and prompt. I've noticed a significant improvement in my overall health 
                            since switching. Highly recommend this website for all things organic!
                        </p>
                        <div className="flex justify-center items-center gap-4 mb-16">
                            <img src="..\client02-free-img.png"></img>
                            <p className="font-semibold text-sm">Mila Kunis</p>
                        </div>
                    </div>
                    <div className=" w-[32%] flex  rounded-md min-h-52 flex-col items-center justify-center shadow-xl relative">
                        <img src="..\cust-review.jpg" className=" rounded-md brightness-50 absolute top-0 left-0 h-full w-full object-cover"></img>
                        <div className="pl-5 pr-5 relative z-10 flex flex-col text-white justify-center items-center">
                            <p className="mb-8 leading-tight font-merriweather text-center tracking-wide font-bold text-4xl">Deal Of The Day 15% Off On All Vegetables!</p>
                            <p className="text-md font-medium text-center mb-12">Today's Fresh Deal! Don't Miss Out on Nature's Best Savings!</p>
                            <div className="font-sans mr-7">
                                <NavLink to="/grocery">
                                    <button className="bg-[#508810e1] transition ease-in duration-200 hover:bg-[#8bc34a] flex items-center gap-x-4 uppercase font-semibold text-white pl-6 pr-6 pt-3 pb-3 rounded-md ">
                                        <FaShoppingCart />
                                        <p>Shop Now</p>
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[32%]  rounded-md flex min-h-52 flex-col items-center justify-center shadow-xl">
                        <div className="pt-16 pb-12 flex text-yellow-400">
                            <TbStarFilled /><TbStarFilled /><TbStarFilled /><TbStarFilled /><TbStarFilled />
                        </div>
                        <p className="font-sans text-md pl-5 pr-5 text-center mb-5">
                            Amazing experience with this organic products site! Fast shipping and eco-friendly packaging. 
                            The products are pure and effective, exceeding my expectations. Their transparency about 
                            ingredients is refreshing. Will definitely be a repeat customer. 
                            Highly recommend for organic enthusiasts!
                        </p>
                        <div className="flex justify-center items-center gap-4 mb-16">
                            <img src="..\client01-free-img.png"></img>
                            <p className="font-semibold text-sm">Shaun Michaels</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="h-auto w-full bg-[#001524] text-white">
            <div className="flex mb-20">
                <div className="flex flex-col w-1/4 ml-8 mt-16">
                    <NavLink to="/">
                        <img src="..\organic-store-white-logo.png" className="h-[4.4rem] mb-16"></img>
                    </NavLink>
                    <p className="mt-4 text-[#989494c4] font-sans font-semibold text-md">
                        The organic store offers a variety of natural and eco-friendly products, 
                        including fresh produce, pantry staples, and health supplements. 
                        Prioritizing sustainability and wellness, it supports local farmers and 
                        provides customers with high-quality, chemical-free options for a healthier 
                        lifestyle.
                    </p>
                </div>
                <div className="flex w-3/4">
                    <div className="flex flex-col w-1/2 justify-center items-center">
                        <div>
                            <p className="font-bold font-merriweather text-2xl mt-16 mb-8">Quick Links</p>
                            <div className="flex text-[#989494c4] font-sans flex-col font-semibold text-md mb-2">
                                <NavLink className="hover:text-white transition duration-200 ease-in" to="/about">About</NavLink>
                                <NavLink className="hover:text-white transition duration-200 ease-in" to="/cart">Cart</NavLink>
                                <NavLink className="hover:text-white transition duration-200 ease-in" to="/contact">Contact</NavLink>
                                <NavLink className="hover:text-white transition duration-200 ease-in" to="/">Home</NavLink>
                                <NavLink className="hover:text-white transition duration-200 ease-in" to="/everything">Shop</NavLink>
                            </div>
                        </div>

                        <div>
                            <p className="font-bold font-merriweather text-2xl mt-16 mb-8">Site Links</p>
                            <div className="flex flex-col font-sans cursor-pointer text-[#989494c4] font-semibold text-md mb-8">
                                <p className="hover:text-white transition duration-200 ease-in">Privacy Policy</p>
                                <p className="hover:text-white transition duration-200 ease-in">Shipping Details</p>
                                <p className="hover:text-white transition duration-200 ease-in">Offers & Coupons</p>
                                <p className="hover:text-white transition duration-200 ease-in">Terms & Conditions</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-1/2">
                        <div>
                            <p className="font-bold font-merriweather text-2xl mt-16 mb-8">Download Our Mobile App</p>
                            <p className="text-[#989494c4] font-sans font-semibold text-md mb-8">
                                For easy access to organic products, exclusive deals, and convenient shopping on the go. Experience the best of sustainable living right at your fingertips!
                            </p>
                        </div>
                        <div>
                            <p className="font-bold font-merriweather text-2xl mt-16 mb-8"> More</p>
                            <div className="flex text-[#8bc34a] font-sans flex-col font-semibold text-md mb-8">
                                <p className="hover:text-[#508810e1] transition duration-200 ease-in">Visit Store</p>
                                <p className="hover:text-[#508810e1] transition duration-200 ease-in">Let's Connect</p>
                                <p className="hover:text-[#508810e1] transition duration-200 ease-in">Locate Stores</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <img src="../play-store.png" className="h-14 w-36"></img>
                            <img src="../app-store.png" className="h-14 w-36"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-[#989494c4]"></div>

            <div className="mb-10 h-24 flex justify-between">
                <div>
                    <p className="ml-8 mt-10 text-[#989494c4] font-sans font-semibold text-md">Copyright © 2024 | Organic Store</p>
                </div>
                <div className="flex gap-4 text-[#989494c4] mr-8 mt-10">
                    <FaFacebook  className="hover:text-[#8bc34a] transition duration-200 ease-in"/>
                    <FaInstagram className="hover:text-[#8bc34a] transition duration-200 ease-in"/>
                    <FaLinkedin  className="hover:text-[#8bc34a] transition duration-200 ease-in"/>
                    <FaXTwitter  className="hover:text-[#8bc34a] transition duration-200 ease-in"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home