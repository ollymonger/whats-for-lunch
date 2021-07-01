import { Drink } from "./Drink";
import { Main } from "./Main";
import { Snack } from "./Snack";

export interface Food {
    snack: Snack | null
    main: Main | null
    drink: Drink | null
}
