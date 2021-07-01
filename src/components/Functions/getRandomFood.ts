import { Food } from "../../interfaces/Food";


export const getRandomFood = () => {
    let selected: Food = {
        snack: { name: "Crisps", info: "Testing testing testing", picture: "https://snipstock.com/assets/cdn/png/534b912622b0bc60dd8b339c32e4da74.png", preptime: 2 },
        main: null,
        drink: null
    }

    fetch('http://localhost:8080/api/get-my-food')
        .then(data => console.log(data))
        .catch(e => console.log(e));

    return selected;
}
