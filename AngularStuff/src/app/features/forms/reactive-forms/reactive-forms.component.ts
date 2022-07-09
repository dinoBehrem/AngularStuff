import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { User, Job, Task } from './user';
import { fcv_ValidateAge } from '../../formValidators/customFormaValidators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  user : FormGroup = new FormGroup({
    name : new FormControl('Dino'),
    surname : new FormControl('Behrem'),
    age : new FormControl(30, [fcv_ValidateAge]),
    isActive : new FormControl(true),
    job: this.formBuilder.group({
      title: ["", [Validators.required, Validators.minLength(4)]],
      description: ["", [Validators.minLength(15)]]
    }),
    tasks: this.formBuilder.array([], [Validators.required])
  },);

  korisnik! : User;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  printValues(){
    
    console.log(this.user.get('age')?.errors);

    this.korisnik = this.user.value;

    this.korisnik.job = this.user.value.job as Job;
    this.korisnik.tasks = this.user.value.tasks as Task[];
    
    console.log(this.korisnik);
    console.log(this.korisnik?.job?.title || "Job not initialized");
    console.log(this.korisnik?.tasks || "Tasks not initialized");
  }

  getTasks(): FormArray {
    return this.user.get("tasks") as FormArray;
  }

  newTask() : FormGroup {
    return this.formBuilder.group({
      name: ["", [Validators.required]],
      status: false
    });
  }

  addTask(){
    this.getTasks().push(this.newTask());
  }
}
