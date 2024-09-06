import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="spinner mb-10"></div>
        <p className="text-xl font-bold text-[#333333]">Loading</p>
    </div>
  )
}

export default Spinner