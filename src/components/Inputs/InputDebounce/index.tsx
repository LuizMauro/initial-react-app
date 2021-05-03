import React, { useState } from 'react';
import useDebounce from '@hooks/useDebounce';
// import { Container } from './styles';

interface IProps {
  value?: string;
  onChange: Function;
}

const InputDebounce: React.FC<IProps> = ({ value, onChange, ...rest }) => {
  const [displayValue, setDisplayValue] = useState<any>(value);
  const debouncedChange = useDebounce(onChange, 800);

  const handleChange = (event: any) => {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  };

  return <input {...rest} value={displayValue} onChange={handleChange} />;
};

export default InputDebounce;
