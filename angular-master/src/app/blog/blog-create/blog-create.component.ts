import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogServiceService } from '../blog-service.service';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css'],
})
export class BlogCreateComponent implements OnInit {
  inputForm!: FormGroup;
  submitted = false;
  blogPost: Observable<Blog>;
  constructor(
    private blogService: BlogServiceService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.inputForm = this.fb.group({
      userId: [null, Validators.required],
      title: [null, Validators.required],
      body: [null, Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log('ini form', this.inputForm);

    const upload = this.inputForm.value;
    this.blogService.onCreate(upload).subscribe((value) => console.log('ok'));
    console.log('Observable post check', this.blogPost);

    console.log('di kirim ke service', this.blogService);

    //
    // this.router.navigate(['/home']);
  }
}
