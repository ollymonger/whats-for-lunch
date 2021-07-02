# Models readme
This folder holds all of the models required for the Food data.

### Model Food requirements
- Requires 3 keys:
- - snack of type Snack or null
- - main of type Main or null
- - drink of type Drink or null
- Each of these must contain the name, picture, preptime & an info string.

The null requirements enable the project to check if the data has been returned from the server successfully. If any of these requirements are not fulfilled by the server, an error card is shown on the frontend instead of the food data.
