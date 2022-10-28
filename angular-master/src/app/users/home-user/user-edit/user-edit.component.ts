import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, Subscription } from 'rxjs';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  gander = ['Male', 'Female'];
  position = ['Front end', 'Back End', 'Full Stack'];
  status = ['Married', 'Single'];
  inputForm: FormGroup;

  isEdit: boolean = false;
  subcription?: Subscription;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.editForm();
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

  get FormControlItem() {
    return this.inputForm.get('address') as FormArray;
  }

  // itemAddress.forEach(element => {
  //   this.
  // });

  createItem(): FormGroup {
    return this.fb.group({
      addressName: new FormControl(null, Validators.required),
      zipCode: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
    });
  }

  editForm() {
    const id = this.route.snapshot.queryParamMap.get('userID');
    this.isEdit = id != null;

    if (this.isEdit) {
      this.subcription = this.userService.listUser$
        .pipe(first((users) => users.length !== 0))
        .subscribe((users) => {
          const user = users.find((user) => user.idNumber === id);
          this.setformValue(user);
        });
    }
  }

  setformValue(user: any) {
    this.inputForm.setValue(user);
    console.log(this.inputForm);
  }

  //button function

  onAddNewAddress() {
    this.FormControlItem.push(this.createItem());
  }

  onSubmit() {
    console.log('ini form', this.inputForm);

    const upload = this.inputForm.value;
    this.userService.updateUser(upload);
    console.log('di kirim ke service', this.userService);

    this.router.navigate(['/home']);
  }
  //button function
}
