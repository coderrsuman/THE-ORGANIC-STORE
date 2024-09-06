import React, { useEffect, useState } from 'react'
import GroceryItems from '../components/GroceryItems';
import Spinner from '../components/Spinner';

const Grocery = () => {

    const Url = "https://api.spoonacular.com/recipes/716429/information?apiKey=49d7f899150e423181c5605615285dba&includeNutrition=true."

    const [groceryItems, setGroceryItems]  = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchGroceryData(){
        setLoading(true);
        try {
            const data = await fetch(Url);
            const response = await data.json();
            console.log(response.extendedIngredients);
            setGroceryItems(response.extendedIngredients);
        } catch (error) {
            console.log("Error in fetching Data");
            alert("Unable to get Grocery Items");
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchGroceryData();
    }, []);

  return (
    <div className="select-none">
        <div className="flex justify-center">
            <h1 className="font-bold mb-4 font-merriweather text-3xl text-[#333333] mt-16 tracking-tight text-center">Daily Groceries - Fresh, Organic, and Local!</h1>
        </div>
        {
            loading ? (<Spinner/>) : 
            (
                <div className="mt-20 w-full flex flex-wrap justify-around">
                    {   groceryItems && 
                        groceryItems.map((item) => {
                            return(
                                <GroceryItems key={item.id} item={item}/>
                            )
                        })
                    }
                </div>
            )
        }
    </div>
    
  )
}

export default Grocery