import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDtailComponent } from './blog-dtail.component';

describe('BlogDtailComponent', () => {
  let component: BlogDtailComponent;
  let fixture: ComponentFixture<BlogDtailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDtailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDtailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
