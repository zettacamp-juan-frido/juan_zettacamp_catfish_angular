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
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
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

  inputForm!: FormGroup;
  submitted = false;
  data: any;

  constructor(
    private userService: UsersService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    // this.inputForm.valueChanges.subscribe((value) => console.log(value));
    // this.inputForm.statusChanges.subscribe((status) => console.log(status));
  }

  initForm() {
    this.inputForm = this.fb.group({
      idNumber: [null, Validators.required],
      name: [null, Validators.required],
      age: [null, [Validators.required, Validators.min(10)]],
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

  forbidden(control: FormControl): Promise<any> | Observable<any> {
    // const nameRegexp: RegExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const numbers = '10';
    const promise = new Promise<any>((resolve, reject) => {
      if (control.value <= numbers) {
        resolve({ ageForbidden: true });
      } else {
        resolve({ ageForbidden: false });
      }
    });
    return promise;
    // if (control.value && nameRegexp.test(control.value)) {
    //   return { nameForbidden: true };
    // }
    // if (control.value < numbers) {
    //   return { ageForbidden: true };
    // }
    // return null;
  }

  // function for button
  onAddNewAddress() {
    this.FormControlItem.push(this.createItem());
  }
  onSubmit() {
    this.submitted = true;
    console.log('ini form', this.inputForm);
    if (this.inputForm.invalid) {
      Swal.fire({
        title: 'Data not Complete',
        text: 'Please Complete Data',
        icon: 'error',
      });
      return;
    } else {
      Swal.fire({
        title: 'Success',
        text: 'Data input',
        icon: 'success',
      });
      const upload = this.inputForm.value;
      this.userService.addUser(upload);
      console.log('di kirim ke service', this.userService);

      this.router.navigate(['/home']);
    }
  }
}
