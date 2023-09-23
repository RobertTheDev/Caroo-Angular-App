import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator function to check for at least one special character in a password field.
const minimumSpecialCharactersValidator: ValidatorFn = (
  control: AbstractControl,
): { [key: string]: boolean } | null => {
  const value = control.value as string;

  // Define a regular expression to match special characters.
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  if (!specialCharRegex.test(value)) {
    return { minimumSpecialCharacters: true };
  }

  return null;
};

export default minimumSpecialCharactersValidator;
