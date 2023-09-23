import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator function to check for at least one capital letter in a password field.
const minimumCapitalLettersValidator: ValidatorFn = (
  control: AbstractControl,
): { [key: string]: boolean } | null => {
  const value = control.value as string;

  if (!/[A-Z]/.test(value)) {
    return { minimumCapitalLetters: true };
  }

  return null;
};

export default minimumCapitalLettersValidator;
