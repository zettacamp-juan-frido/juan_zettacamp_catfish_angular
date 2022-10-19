import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenNo2Component } from './komponen-no2.component';

describe('KomponenNo2Component', () => {
  let component: KomponenNo2Component;
  let fixture: ComponentFixture<KomponenNo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomponenNo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomponenNo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
