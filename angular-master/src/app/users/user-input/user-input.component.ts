import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

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

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

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
    console.log('ini form', this.inputForm);

    const upload = this.inputForm.value;
    this.userService.addUser(upload);
    console.log('di kirim ke service', this.userService);

    this.router.navigate(['/home']);
  }
}
