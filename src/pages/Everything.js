import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import EverythingItem from '../components/EverythingItem';

const Everything = () => {

    const url = "https://api.spoonacular.com/food/ingredients/search?apiKey=49d7f899150e423181c5605615285dba&query=bread&sort=calories&number=52&sortDirection=asc";

    const [everything, setEverything] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchData(){
        setLoading(true);
        try {
            const data = await fetch(url);
            const response = await data.json();
            console.log(response.results);
            setEverything(response.results);
        } catch (error) {
            console.log("Error in fetching Data");
            alert("Unable to get Items");
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div className="select-none">
        <div className="flex justify-center">
            <h1 className="font-bold mb-4 font-merriweather text-3xl text-[#333333] mt-16 tracking-tight text-center">Purely Organic, purely delicious- savor nature's finest in every bite!</h1>
        </div>
        {
            loading ? (<Spinner/>) : 
            (
                <div className="mt-20 w-full flex flex-wrap justify-around">
                    {   everything && 
                        everything.map((item) => {
                            return(
                                <EverythingItem key={item.id} item={item}/>
                            )
                        })
                    }
                </div>
            )
        }
    </div>
  )
}

export default Everything