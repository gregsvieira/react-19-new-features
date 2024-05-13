import { useRef, useEffect } from 'react';
import InputField from './InputField';

const ParentComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  return (
  <div>
    <InputField placeholder='Type something here' ref={inputRef} />
  </div>
  );
};

export default ParentComponent;