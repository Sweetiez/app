const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/;
const PHONE_REGEX = /^((\+)33|0)[1-9](\d{2}){4}$/;
const NAME_REGEX = /^[a-zA-Z]{2,25}$/;

export const validateEmail = (email: string) => {
  return EMAIL_REGEX.test(email);
};

export const validatePassword = (password: string) => {
  return PASSWORD_REGEX.test(password);
};

export const validateName = (name: string) => {
  return NAME_REGEX.test(name);
};
export const validatePhone = (phone: string) => {
  return PHONE_REGEX.test(phone);
};
