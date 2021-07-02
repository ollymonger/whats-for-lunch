import { type } from 'os';
import { Food } from './Food'

test('expect Food object to be of type Food', () => {
    let input = {
        snack: {
            name: "Crisps",
            picture: "link",
            info: "some info text",
            preptime: 0,
        },

        main: {
            name: "Burger",
            picture: "link",
            info: "some info text",
            preptime: 0
        },

        drink: {
            name: "tea",
            picture: "link",
            info: "some info text",
            preptime: 0
        }
    }

    let expected: Food = {
        snack: null,
        main: null,
        drink: null
    }

    expect(typeof input).toBe(typeof expected);
})
