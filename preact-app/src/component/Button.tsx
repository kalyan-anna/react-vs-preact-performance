import './Button.css';

type ButtonProps = {
  name: string;
  orange?: boolean;
  wide?: boolean;
  clickHandler: (name: string) => void;
};

const Button = (props: ButtonProps) => {
  const handleClick = () => {
    props.clickHandler(props.name);
  };

  const className = [
    'component-button',
    props.orange ? 'orange' : '',
    props.wide ? 'wide' : '',
  ];

  return (
    <div className={className.join(' ').trim()}>
      <button onClick={handleClick}>{props.name}</button>
    </div>
  );
};

export default Button;
