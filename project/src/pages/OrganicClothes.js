import React, { useEffect, useState } from 'react'
import Cloth from '../components/Cloth';
import Spinner from '../components/Spinner';

const OrganicClothes = () => {

    const url = 'https://fakestoreapi.com/products';

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchClothData(){

        var clothes = [];
        setLoading(true);
        try {
            const data = await fetch(url);
            const response = await data.json();
            response.forEach((item) => {
                if(item.category === "men's clothing" || item.category === "women's clothing"){
                    clothes.push(item);
                }
            });
            console.log(clothes);
            setPosts(clothes);
        } catch (error) {
            console.log("Error in fetching Data");
            alert("Unable to get Items");
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchClothData();
    }, []);

  return (
    <div className="select-none">
        <div className="flex justify-center">
            <h1 className="font-bold mb-4 font-merriweather text-3xl text-[#333333] mt-16 tracking-wide text-center">Experience Pure Comfort with 100% Organic Cotton!</h1>
        </div>
        {
            loading ? (<Spinner/>) : 
            (
                <div className="mt-20 w-full flex flex-wrap justify-around">
                    {   posts && 
                        posts.map((item) => {
                            return(
                                <Cloth key={item.id} item={item}/>
                            )
                        })
                    }
                </div>
            )
        }
    </div>
  )
}

export default OrganicClothes