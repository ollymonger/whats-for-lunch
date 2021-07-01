import React from "react";
import { useEffect } from "react";
import { Food } from "../interfaces/Food";
import { getRandomFood } from "./Functions/getRandomFood";


export const FoodSelection: React.FunctionComponent = () => {
    let defaultFood = { snack: null, main: null, drink: null }
    const [Food, SetFood] = React.useState<Food>(defaultFood);

    useEffect(() => {
        let returnedFood = getRandomFood();
        SetFood(returnedFood);
    }, [])

    return (
        <div>
            <div className="snack">
                {Food.snack?.name}
            </div>
            <div className="main">
                {Food.main?.name}
            </div>
            <div className="drink">
                {Food.drink?.name}
            </div>
        </div>
    )
}
