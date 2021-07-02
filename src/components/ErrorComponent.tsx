import { Card, CardActionArea, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import { Food } from "../models/Food";
import { Logging } from "../utils/logging";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    image: {
        height: 300
    }
})

export const ErrorComponent: React.FunctionComponent<Food> = (props: Food) => {
    const classes = useStyles();
    let Logger: Logging = new Logging();
    Logger.log("error", `Possible error with food selection: ${JSON.stringify(props)}`);
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center" style={{ marginTop: '5vh' }}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia className={classes.image} image="https://toppng.com/uploads/preview/red-sign-computer-stop-icon-glass-mark-symbol-error-icon-11553384323ic7y7sm9ve.png" title="Server Error" />
                    <CardContent>
                        <Typography variant="h5" component="h3">
                            ERROR!
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            The requested content has not returned successfully.
                            Please, have a look in the console and check the detailed error log & report this on Git.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
