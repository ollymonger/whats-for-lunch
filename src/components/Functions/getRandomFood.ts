import { Food } from "../../interfaces/Food";


export const getRandomFood = () => {
    let selected: Food = {
        snack: { name: 'test', picture: 'test', preptime: 10, info: "test" },
        main: { name: 'test', picture: 'test', preptime: 10, info: "test" },
        drink: { name: 'test', picture: 'test', preptime: 10, info: "test" }
    }

    fetch('http://localhost:8080/api/get-my-food')
        .then(data => console.log(data))
        .catch(e => console.log(e));

    return selected;
}
