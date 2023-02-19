import './Display.css';

type DisplayProps = {
  value: string;
};

const Display = (props: DisplayProps) => {
  return (
    <div className='component-display'>
      <div>{props.value}</div>
    </div>
  );
};

export default Display;
