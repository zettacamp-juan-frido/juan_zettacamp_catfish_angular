import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  // inputForm: FormGroup;

  isEdit: boolean = false;
  subcription?: Subscription;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  inputForm = new FormGroup({
    // inputValidate: new FormGroup({}),
    idNumber: new FormControl('', Validators.required),
    name: new FormControl(null, Validators.required),
    age: new FormControl(null, Validators.required),
    gander: new FormControl('', Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    position: new FormControl(null, Validators.required),
    status: new FormControl(null, Validators.required),
  });
  ngOnInit(): void {
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

  onSubmit() {
    console.log('ini form', this.inputForm);

    const upload = this.inputForm.value;
    this.userService.updateUser(upload);
    console.log('di kirim ke service', this.userService);

    this.router.navigate(['/home']);
  }
}
