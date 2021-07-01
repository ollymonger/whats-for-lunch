import { Food } from "../../interfaces/Food";


export const getRandomFood = async () => {
    let selected: Food = {
        snack: null,
        main: null,
        drink: null
    }

    await fetch('http://localhost:8080/get-my-food', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(data => data.json()).then(res => {
        selected.snack = res.snack;
        selected.main = res.main;
        selected.drink = res.drink;
    }).catch(e => console.log(e));

    return selected;
}
