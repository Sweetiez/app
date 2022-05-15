const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const validateEmail = (email: string) => {
  return EMAIL_REGEX.test(email);
};

export const validatePassword = (password: string) => {
  return PASSWORD_REGEX.test(password);
};
