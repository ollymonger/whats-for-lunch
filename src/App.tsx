import React from 'react';
import logo from './logo.svg';
import { FoodSelection } from './components/FoodSelection';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles({
  app: {
    alignItems: 'center',
  }
})
const App: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <FoodSelection />
    </div>
  );
}

export default App;
