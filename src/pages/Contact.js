import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: ""
    });

    function changeHandler(event) {
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }

    function submitHandler(event) {
        event.preventDefault();
        console.log("Printing the Form Data");
        console.log(formData);
        toast.success(`Thank You for Reaching Out!
        We will get back to you shortly.`);
    }

    return (
        <div className="flex flex-col items-center mt-10">
            <form onSubmit={submitHandler} className="w-full max-w-lg bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                        First Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your First Name"
                        name="firstName"
                        required
                        onChange={changeHandler}
                        value={formData.firstName}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#8bc34a]"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                        Last Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter Your Last Name"
                        name="lastName"
                        required
                        onChange={changeHandler}
                        value={formData.lastName}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#8bc34a]"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        required
                        onChange={changeHandler}
                        value={formData.email}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#8bc34a]"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comments">
                        Comments
                    </label>
                    <textarea
                        placeholder="Enter Your Comments Here"
                        name="comments"
                        required
                        onChange={changeHandler}
                        value={formData.comments}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-[#8bc34a] h-24"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-[#8bc34a] flex items-center gap-x-4 uppercase font-semibold text-white pl-6 pr-6 pt-3 pb-3 rounded-md" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
