import React from "react";
import { Food } from "../interfaces/Food";
import { getRandomFood } from "./Functions/getRandomFood";


export const FoodSelection: React.FunctionComponent = () => {

    let myFood: Food = getRandomFood();

    return (
        <div>
            <div className="snack">
                {myFood.snack?.name}
            </div>
            <div className="main">
            </div>
            <div className="drink">
            </div>
        </div>
    )
}
