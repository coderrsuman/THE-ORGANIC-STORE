import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 select-none">
        <section className="text-center mb-16">
            <h1 className="text-[#90cb51] font-merriweather text-4xl font-bold mb-6">
                Welcome to The Organic Store
            </h1>
            <p className="font-sans text-md font-semibold">
                Your number one source for all things organic. We're dedicated to providing you the very best of organic products, with an emphasis on quality, sustainability, and health.
            </p>
        </section>
        
        <section className="mb-16">
            <h2 className="text-center text-[#90cb51] font-merriweather text-4xl font-bold mb-6">
                Our Mission
            </h2>
            <p className="font-sans text-md font-semibold">
                Our mission is to offer the finest organic products that promote a healthy lifestyle and a sustainable environment. We believe in the power of nature and strive to bring you products that are as close to their natural state as possible.
            </p>
        </section>
        
        <section className="mb-16">
            <h2 className="text-center text-[#90cb51] font-merriweather text-4xl font-bold mb-6">
                Our Story
            </h2>
            <p className="font-sans text-md font-semibold">
                Founded in 2020 by Alex Green, The Organic Store has come a long way from its beginnings in a small kitchen in Portland, Oregon. When Alex first started out, their passion for organic living and a vision to make high-quality organic products accessible to everyone drove them to quit their day job and turn hard work and inspiration into a booming online store.
            </p>
        </section>
        
        <section className="mb-16">
            <h2 className="text-center text-[#90cb51] font-merriweather text-4xl font-bold mb-6">
                Our Values
            </h2>
            <p className="font-sans text-md font-semibold mb-4">
                At The Organic Store, we hold our products to the highest standards of quality and integrity. We are committed to:
            </p>
            <ul className="font-sans text-md font-semibold list-disc list-inside space-y-2">
                <li><strong>Sustainability:</strong> Ensuring our products and practices protect the environment.</li>
                <li><strong>Transparency:</strong> Being open and honest about our sourcing and production processes.</li>
                <li><strong>Health:</strong> Offering products that contribute to a healthy lifestyle for our customers.</li>
            </ul>
        </section>
        
        <section className="mb-16">
            <h2 className="text-center text-[#90cb51] font-merriweather text-4xl font-bold mb-6">
                Our Products
            </h2>
            <p className="font-sans text-md font-semibold">
                We offer a wide range of organic products, including fresh produce, beauty items, and household goods. All our products are certified organic and sourced from trusted farmers and suppliers who share our commitment to quality and sustainability.
            </p>
        </section>
        
        <section className="mb-16">
            <h2 className="text-center text-[#90cb51] font-merriweather text-4xl font-bold mb-6">
                Our Impact
            </h2>
            <p className="font-sans text-md font-semibold">
                We believe in giving back to the community and supporting causes that align with our values. We regularly donate to local food banks and are actively involved in environmental clean-up efforts. Our goal is to make a positive impact on both our customers and the planet.
            </p>
        </section>
        
        <section className="text-center">
            <h2 className="text-[#90cb51] font-merriweather text-4xl font-bold mb-6">
                Get in Touch
            </h2>
            <p className="font-sans text-md font-semibold mb-8">
                We hope you enjoy our products as much as we enjoy offering them to you. 
                If you have any questions or comments, please don't hesitate to <NavLink to="/contact" className="text-[#90cb51] font-semibold underline hover:text-[#a2e45c]">contact us</NavLink>. Happy shopping!
            </p>
        </section>
    </div>
  );
}

export default About;
