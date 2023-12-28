
import { useState,useEffect } from "react";
import MealItem from "./MealItem.jsx";


export default function Meals() {
    const [loadedMeals, setLoadedMeals] = useState([]);
    useEffect(()=>{
        async function fetchMeals() {

            const responese = await fetch('http://localhost:3000/meals');
    
            if (!responese.ok) {
                //
            }
    
            const meals = await responese.json();
            setLoadedMeals(meals);
        }

        fetchMeals();
    },[]);

    




    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal}/>
            ))}
        </ul>
    )
}
