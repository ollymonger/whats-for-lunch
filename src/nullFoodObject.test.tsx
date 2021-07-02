import { getRandomFood } from "./utils/getRandomFood";
import { Food } from './models/Food'

test('getRandomFood returns food object with null snack, drink and mains', async () => {
    let returnedFood = await getRandomFood();
    let expected = { "drink": null, "main": null, "snack": null };
    expect(returnedFood).toStrictEqual(expected);
})

test('_setFood sets error to true, to enable the error component!', async () => {
    let defaultFood = { snack: null, main: null, drink: null, preptime: 0 };
    let error: boolean = false;
    let selectedFood: Food;

    let _setFood = (food: Food) => {
        if (food.snack === null || food.main === null || food.drink === null) {
            error = true;
            return;
        }
        selectedFood = food;
        return;
    }

    _setFood(defaultFood);

    expect(error).toBe(true);
})
