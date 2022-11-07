import { Component, Inject, OnInit } from '@angular/core';
import { Form, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/container/model/user.model';
import Swal from 'sweetalert2';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  dataValue: User;
  datas: User[];
  userForm = this.formBuilder.group({
    // id: [this.dataValue.id + '1'],
    civility: [''],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    date: ['', Validators.required],
    gender: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    public userService: UserService,
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  ngOnInit(): void {
    this.userService.$user.subscribe((value) => {
      this.datas = value;
      this.datas.forEach((element) => {
        this.dataValue = element;
      });
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  onAdd() {
    const isValid = this.userForm.valid;

    if (!isValid) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
      });
    } else {
      this.dialogRef.close(this.userForm.value);
    }
  }
}
