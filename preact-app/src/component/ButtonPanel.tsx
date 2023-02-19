import Button from './Button';

import './ButtonPanel.css';

type ButtonPanelProps = {
  clickHandler: (name: string) => void;
};

const ButtonPanel = (props: ButtonPanelProps) => {
  const handleClick = (buttonName: string) => {
    props.clickHandler(buttonName);
  };

  return (
    <div className='component-button-panel'>
      <div>
        <Button name='AC' clickHandler={handleClick} />
        <Button name='+/-' clickHandler={handleClick} />
        <Button name='%' clickHandler={handleClick} />
        <Button name='÷' clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name='7' clickHandler={handleClick} />
        <Button name='8' clickHandler={handleClick} />
        <Button name='9' clickHandler={handleClick} />
        <Button name='x' clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name='4' clickHandler={handleClick} />
        <Button name='5' clickHandler={handleClick} />
        <Button name='6' clickHandler={handleClick} />
        <Button name='-' clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name='1' clickHandler={handleClick} />
        <Button name='2' clickHandler={handleClick} />
        <Button name='3' clickHandler={handleClick} />
        <Button name='+' clickHandler={handleClick} orange />
      </div>
      <div>
        <Button name='0' clickHandler={handleClick} wide />
        <Button name='.' clickHandler={handleClick} />
        <Button name='=' clickHandler={handleClick} orange />
      </div>
    </div>
  );
};

export default ButtonPanel;
