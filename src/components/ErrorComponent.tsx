import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { Food } from "../interfaces/Food";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    image: {
        height: 140
    }
})

export const ErrorComponent: React.FunctionComponent<Food> = (props: Food) => {
    const classes = useStyles();

    return (
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
    )
}
