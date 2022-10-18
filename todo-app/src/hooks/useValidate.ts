import { ChangeEvent, useState } from "react";

type ValidateCallback = (value: string) => boolean;

type UseValidate = (
  callback: ValidateCallback
) => [
  string,
  boolean,
  boolean,
  (event: ChangeEvent<HTMLInputElement>) => void,
  () => void
];

export const useValidate: UseValidate = (validateCallback) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [isValidate, setIsValidate] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);

    if (validateCallback(value)) {
      setError(false);
      setIsValidate(true);
    }

    if (!validateCallback(value)) {
      setError(true);
      setIsValidate(false);
    }
  };

  const handleCheck = () => {
    if (validateCallback(value)) {
      setError(false);
    }

    if (!validateCallback(value)) {
      setError(true);
    }
  };

  return [value, error, isValidate, handleChange, handleCheck];
};
