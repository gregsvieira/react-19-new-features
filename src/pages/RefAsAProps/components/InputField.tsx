import { RefObject } from "react";

const InputField = ({placeholder, ref}: {placeholder: string, ref: RefObject<HTMLInputElement>}) => {
  return <input type="text" placeholder={placeholder} ref={ref} />;
};

export default InputField;