import { AbstractControl, ValidatorFn } from '@angular/forms';

// Custom validator function to check for at least one number in a password field.
const minimumNumbersValidator: ValidatorFn = (
  control: AbstractControl,
): { [key: string]: boolean } | null => {
  const value = control.value as string;

  if (!/[0-9]/.test(value)) {
    return { minimumNumbers: true };
  }

  return null;
};

export default minimumNumbersValidator;
