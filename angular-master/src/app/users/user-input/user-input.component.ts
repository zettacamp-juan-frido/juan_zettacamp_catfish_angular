import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  gender = ['Male', 'Female'];
  position = ['Front end', 'Back End', 'Full Stack'];
  status = ['Married', 'Single'];
  inputForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      // inputValidate: new FormGroup({}),
      idNumber: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      gender: new FormControl(''),
      email: new FormControl(null, [Validators.required, Validators.email]),
      position: new FormControl(null, Validators.required),
      status: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    console.log(this.inputForm);
  }
}
