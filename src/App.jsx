import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/counterActions';

import './App.css'

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
      <div>
      <h1 style={{ color: count > 0 ? 'green' : 'red' }}>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(decrement())}> - </button>
      </div>
      
  )
}

export default App;
