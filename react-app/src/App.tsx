import React, { useState } from 'react';
import Display from './component/Display';
import ButtonPanel from './component/ButtonPanel';
import calculate from './logic/calculate';
import './App.css';

export default function App() {
  const [state, setState] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const handleClick = (buttonName: string) => {
    setState((prevState) => ({
      ...prevState,
      ...calculate(state, buttonName),
    }));
  };

  return (
    <div className='component-app'>
      <Display value={state.next || state.total || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}
