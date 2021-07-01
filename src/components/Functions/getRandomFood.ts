import { Food } from "../../interfaces/Food";


export const getRandomFood = () => {
    let selected: Food = {
        snack: null,
        main: null,
        drink: null
    }

    fetch('http://localhost:8080/api/get-my-food')
        .then(data => console.log(data))
        .catch(e => console.log(e));

    return selected;
}
