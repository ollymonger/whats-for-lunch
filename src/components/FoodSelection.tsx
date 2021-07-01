import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
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
    let defaultFood = { snack: null, main: null, drink: null }
    const [Food, SetFood] = React.useState<Food>(defaultFood);
    const classes = useStyles();

    useEffect(() => {
        let returnedFood = getRandomFood();
        SetFood(returnedFood);
    }, [])

    if (Food.snack == null || Food.main == null || Food.drink == null) {
        return (
            <ErrorComponent {...Food} />
        )
    }

    return (
        <div>
            <div className="snack">
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
            </div>
            <div className="main">
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
            </div>
            <div className="drink">
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
            </div>
        </div>
    )
}
