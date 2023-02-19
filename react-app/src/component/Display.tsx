import React from 'react';

import './Display.css';

type DisplayProps = {
  value: string;
};

const Display: React.FC<DisplayProps> = (props: DisplayProps) => {
  return (
    <div className='component-display'>
      <div>{props.value}</div>
    </div>
  );
};

export default Display;
