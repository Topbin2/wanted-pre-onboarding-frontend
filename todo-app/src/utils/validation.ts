export const emailValidation = (value: string) => {
  const EMAIL_REGEX =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  return EMAIL_REGEX.test(value);
};

export const passwordValidation = (value: string) => {
  console.log(value);
  return value.trim().length > 7;
};
