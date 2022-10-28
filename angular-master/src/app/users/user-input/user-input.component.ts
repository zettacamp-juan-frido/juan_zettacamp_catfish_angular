import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormControlName,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent implements OnInit {
  gander = ['Male', 'Female'];
  position = ['Front end', 'Back End', 'Full Stack'];
  status = ['Married', 'Single'];
  inputForm: FormGroup;
  data: any;

  constructor(
    private userService: UsersService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.inputForm = this.fb.group({
      idNumber: [null, Validators.required],
      name: [null, Validators.required],
      age: [null, Validators.required],
      gander: ['', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      position: [null, Validators.required],
      status: [null, Validators.required],
      address: this.fb.array([]),
    });
  }

  // patchValueForm() {
  //   const {idNumber,name,age,gander,email,position,status,address} = this.data.order
  //   const data = {
  //     idNumber,
  //     name,
  //     age,
  //     gander,
  //     email,
  //     position,
  //     status,
  //     address,
  //   };
  //   address.forEach(element => {
  //     this.FormControlItem.push(this.createItem())
  //   });

  // }

  get FormControlItem() {
    return this.inputForm.get('address') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      addressName: new FormControl(null, Validators.required),
      zipCode: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
    });
  }

  onAddNewAddress() {
    this.FormControlItem.push(this.createItem());
  }
  onSubmit() {
    console.log('ini form', this.inputForm);

    const upload = this.inputForm.value;
    this.userService.addUser(upload);
    console.log('di kirim ke service', this.userService);

    this.router.navigate(['/home']);
  }
}
