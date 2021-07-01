import React from 'react';
import { FoodSelection } from './components/FoodSelection';
import { makeStyles, Typography } from '@material-ui/core';
const useStyles = makeStyles({
  app: {
    backgroundColor: 'rgb(137, 148, 153)',
    height: '115vh',
    position: 'relative',
    userSelect: 'none',
  },
  heading: {
    fontFamily: 'Jomhuria, cursive',
    fontSize: '6vw',
    color: 'whitesmoke',
    textAlign: 'center',
    position: 'relative',
    paddingTop: '15vh',
  }
})
const App: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Typography variant="h3" component="h3" className={classes.heading}>YOUR LUNCH IS...</Typography>
      <FoodSelection />
    </div>
  );
}

export default App;
