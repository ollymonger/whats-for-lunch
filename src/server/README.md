# Server readme
This folder holds the server for the client to access.

### Route: /get-my-food
- Route gathers type drinks, mains and snacks from the database using:
- - ```let drinks = prisma.lunchItems.findMany({ where: { type: "DRINK" }})```
- - ```let mains = prisma.lunchItems.findMany({ where: { type: "MAIN" }})```
- - ```let snacks = prisma.lunchItems.findMany({ where: { type: "SNACK" }})```
- Selects random number based off of: max of drinks, max of mains, max of snacks, to access a randomly selected drink/main/snack: 
- - ```let randomDrink = Math.floor(Math.random() * drinks.length)```
- - ```let randomMain = Math.floor(Math.random() * mains.length)```
- - ```let randomSnack = Math.floor(Math.random() * snacks.length)```
- Generates JSON object of drinks, mains and snacks specific to the Food model
- Returns JSON object as response

JSON object:
```typescript
    {"snack":{"name":"Crisps","picture":"link","preptime":0,"info":"Crisps! Who doesn't love crisps!"},
    "main":{"name":"Jam Sandwich","picture":"link","preptime":5,"info":"Jam sandwich! Two pieces of bread, optional butter and a 'healthy' dose of jam!"},
    "drink":{"name":"Monster Energy","picture":"link","preptime":0,"info":"A great way to ensure you're awake all afternoon!"}}
```
