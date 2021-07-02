# Components readme
This folder contains all of the components used.

## Food Selection component
A react function component that uses:
- error boolean:
- - used so that the returned frontend can display the error component.
- defaultFood: 
- - a default Food object.
- useEffect: 
- - runs only once on load, runs the async function: setRandomFood to allow us to change the default Food object based on the fetched data from ```await getRandomFood();```
- _setFood: 
- - function checks to see if the specified Food object from the async function setRandomFood has any null data. If so, this function will return true and display the error component.
- useState function: 
- - SetFood which sets a Food type object with specified object.
- useState function: 
- - setError used during _setFood 
- - also used to query frontend based on returned food data.
- Material UI for formatting

Returns:
- Check to see whether error boolean is true & return correct component.
- Render the grid containing all the generated food data.

### Error component
This component creates a new instance of the logging system and logs the returned data into the console for debugging. It also renders the grid to show the error card.
