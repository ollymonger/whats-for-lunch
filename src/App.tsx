import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FoodSelection } from './components/FoodSelection';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <FoodSelection {...myFood} />
    </div>
  );
}

export default App;
