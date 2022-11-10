import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { validate } from 'graphql';
import Swal from 'sweetalert2';

interface Data {
  // isEdit: boolean;
  // index?: number;
  ref: String;
  title: String;
  sub_title: String;
  description: String;
  image_url: String;
}

@Component({
  selector: 'app-create-promo',
  templateUrl: './create-promo.component.html',
  styleUrls: ['./create-promo.component.css'],
})
export class CreatePromoComponent implements OnInit {
  userForm = this.formBuilder.group({
    ref: ['', Validators.required],
    title: ['', Validators.required],
    sub_title: ['', Validators.required],
    description: ['', Validators.required],
    image_url: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    // public userService: UserService,
    public dialogRef: MatDialogRef<CreatePromoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data
  ) {}

  ngOnInit(): void {}

  onAdd() {
    const isValid = this.userForm.invalid;

    if (isValid) {
      Swal.fire({
        icon: 'error',
        title: 'Data not complete',
        text: 'Please check data your input',
      });
      return;
    } else {
      this.dialogRef.close(this.userForm.value);
      console.log('logging user form value', this.userForm.value);
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
