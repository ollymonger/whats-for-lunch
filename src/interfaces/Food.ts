import { Drink } from "./Drink";
import { Main } from "./Main";
import { Snack } from "./Snack";

export interface Food {
    snack: Snack
    main: Main
    drink: Drink
}
