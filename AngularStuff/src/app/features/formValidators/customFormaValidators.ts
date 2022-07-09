import { AbstractControl, ValidationErrors, FormGroup, ValidatorFn } from '@angular/forms';

// Reactive forms custom form control validator uses functions
export function fcv_ValidateAge(control: AbstractControl): ValidationErrors | null{
    if (control.value && control.value > 0) {
        return null;
    }
    
    return {'ageValid' : true};
}

// export function fgv_ValidatePattern(formGroup: FormGroup) : ValidationErrors | null {
//     if (formGroup.get('name')?.value != formGroup.get('surname')?.value) {
//         return null;
//     }

//     return { 'patterMatch' : true};
// }