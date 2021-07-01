import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { Food } from "../interfaces/Food";
import { ErrorComponent } from "./ErrorComponent";
import { getRandomFood } from "./Functions/getRandomFood";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    image: {
        height: 140
    }
})

export const FoodSelection: React.FunctionComponent = () => {
    let defaultFood = { snack: null, main: null, drink: null };
    const [Food, SetFood] = React.useState<Food>(defaultFood);
    const [error, setError] = React.useState<boolean>(false);
    const classes = useStyles();

    useEffect(() => {
        let returnedFood = getRandomFood();

        if (returnedFood.snack === null || returnedFood.main === null || returnedFood.drink === null) {
            setError(true);
        }
        SetFood(returnedFood);
    }, [])


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
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            }
        </div >
    )
}
