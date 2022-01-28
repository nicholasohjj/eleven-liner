import { useState } from 'react';

const Radio = (defaultValue) => {
  const [value, setvalue] = useState(defaultValue);

  const onClick = (newvalue) => {
    setvalue(newvalue);
  };

  return {
    value,
    onClick,
  };
};

export { Radio };
