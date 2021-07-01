import { Food } from "../../interfaces/Food";


export const getRandomFood = () => {
    let selected: Food = { snack: null, main: null, drink: null }

    fetch('api/get-my-food')
        .then(data => console.log(data.status))
        .catch(e => console.log(e));

    return selected;
}
