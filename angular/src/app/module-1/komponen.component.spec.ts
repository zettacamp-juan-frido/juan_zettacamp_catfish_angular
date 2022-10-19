import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenComponent } from './komponen.component';

describe('KomponenComponent', () => {
  let component: KomponenComponent;
  let fixture: ComponentFixture<KomponenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomponenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
