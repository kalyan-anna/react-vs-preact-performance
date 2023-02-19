import { useState } from 'preact/hooks';
import Display from './component/Display';
import ButtonPanel from './component/ButtonPanel';
import calculate from './logic/calculate';
import './App.css';

type CalcState = {
  total?: string;
  next?: string;
  operation?: string;
};

export default function App() {
  const [state, setState] = useState<CalcState>({
    total: undefined,
    next: undefined,
    operation: undefined,
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
