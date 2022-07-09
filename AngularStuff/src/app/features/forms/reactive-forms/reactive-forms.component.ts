import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';
import { User, Job, Task } from './user';
import {
  fav_CheckLength,
  fcv_ValidateAge,
  fgv_ValidatePattern,
} from '../../formValidators/customFormaValidators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  user: FormGroup = new FormGroup(
    {
      name: new FormControl('Dino'),
      surname: new FormControl('Behrem'),
      // updateOn blur metohod check for errors  upon submit
      age: new FormControl(30, {
        validators: [fcv_ValidateAge],
        updateOn: 'blur',
      }),
      isActive: new FormControl(true),
      job: this.formBuilder.group({
        title: new FormControl('', {
          validators: [Validators.required, Validators.minLength(4)],
        }),
        description: new FormControl('', [Validators.minLength(15)]),
      }),
      tasks: this.formBuilder.array([], [fav_CheckLength]),
    },
    [fgv_ValidatePattern]
  );

  korisnik!: User;

  ngOnInit(): void {}

  printValues() {
    console.log(this.user.get('age')?.errors);

    this.korisnik = this.user.value;

    this.korisnik.job = this.user.value.job as Job;
    this.korisnik.tasks = this.user.value.tasks as Task[];

    console.log(this.korisnik);
    console.log(this.korisnik?.job?.title || 'Job not initialized');
    console.log(this.korisnik?.tasks || 'Tasks not initialized');
  }

  getTasks(): FormArray {
    return this.user.get('tasks') as FormArray;
  }

  newTask(): FormGroup {
    return this.formBuilder.group({
      name: ['', [Validators.required]],
      status: false,
    });
  }

  addTask() {
    this.getTasks().push(this.newTask());
  }
}
