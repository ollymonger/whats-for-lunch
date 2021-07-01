import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { Food } from "../models/Food";
import { ErrorComponent } from "./ErrorComponent";
import { getRandomFood } from "../utils/getRandomFood";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    image: {
        height: 140
    }
})

export const FoodSelection: React.FunctionComponent = () => {
    let defaultFood = { snack: null, main: null, drink: null, preptime: 0 };
    const [Food, SetFood] = React.useState<Food>(defaultFood);
    const [error, setError] = React.useState<boolean>(false);
    const classes = useStyles();

    useEffect(() => {
        let setRandomFood = async () => {
            let returnedFood = await getRandomFood();
            _setFood(returnedFood);
        };
        setRandomFood();
    }, [])

    let _setFood = (food: Food) => {
        if (food.snack === null || food.main === null || food.drink === null) {
            setError(true);
            return;
        }
        SetFood(food);
        return;
    }

    return (
        <div>
            {error ? <ErrorComponent {...Food} /> :
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center" style={{ marginTop: '5vh' }}>
                    <Grid item xs={2}>
                        <Typography variant="h4" style={{ fontFamily: 'Jomhuria, cursive', color: 'whitesmoke', textAlign: 'center', marginRight: '2.5vw' }}>SNACK</Typography>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.image} image={Food.snack?.picture} title={Food.snack?.name} />
                                <CardContent>
                                    <Typography variant="h5" component="h3">
                                        {Food.snack?.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {Food.snack?.info}
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        Preptime: {Food.snack?.preptime} mins.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="h4" style={{ fontFamily: 'Jomhuria, cursive', color: 'whitesmoke', textAlign: 'center', marginRight: '2.5vw' }}>MAIN</Typography>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.image} image={Food.main?.picture} title={Food.main?.name} />
                                <CardContent>
                                    <Typography variant="h5" component="h3">
                                        {Food.main?.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {Food.main?.info}
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        Preptime: {Food.main?.preptime} mins.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography variant="h4" style={{ fontFamily: 'Jomhuria, cursive', color: 'whitesmoke', textAlign: 'center', marginRight: '2.5vw' }}>DRINK</Typography>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia className={classes.image} image={Food.drink?.picture} title={Food.main?.name} />
                                <CardContent>
                                    <Typography variant="h5" component="h3">
                                        {Food.drink?.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {Food.drink?.info}
                                    </Typography>
                                    <Typography variant="body2" color="textPrimary" component="p">
                                        Preptime: {Food.drink?.preptime} mins.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>
            }
        </div >
    )
}
