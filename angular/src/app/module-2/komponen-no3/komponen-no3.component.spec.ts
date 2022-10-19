import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenNo3Component } from './komponen-no3.component';

describe('KomponenNo3Component', () => {
  let component: KomponenNo3Component;
  let fixture: ComponentFixture<KomponenNo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomponenNo3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomponenNo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
