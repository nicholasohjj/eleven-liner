import { useState } from 'react';

const Setinput = (defaultValue) => {
  const [value, setvalue] = useState(defaultValue);

  const onClick = (newvalue) => {
    setvalue(newvalue);
  };

  return {
    value,
    onClick,
  };
};

export { Setinput };
