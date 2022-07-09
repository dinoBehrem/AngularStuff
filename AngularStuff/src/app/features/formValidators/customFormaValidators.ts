import {
  AbstractControl,
  ValidationErrors,
  FormGroup,
  ValidatorFn,
  FormArray,
} from '@angular/forms';

// Reactive forms custom form control validator uses functions
export function fcv_ValidateAge(
  control: AbstractControl
): ValidationErrors | null {
  if (control.value && control.value > 0) {
    return null;
  }

  return { ageValid: true };
}

// Rective forms custom form group validator
export const fgv_ValidatePattern: ValidatorFn = (
  formGroup: AbstractControl
): ValidationErrors | null => {
  const name = formGroup.get('name')?.value;
  const surname = formGroup.get('surname')?.value;
  if (name == surname) {
    return { patternMatch: true };
  }

  return null;
};

// Rective forms custom form array validator
export const fav_CheckLength: ValidatorFn = (
  formArray: AbstractControl
): ValidationErrors | null => {
  const length = (formArray as FormArray).length;

  if (length > 0) {
    return null;
  }

  return { isEmpty: true };
};
