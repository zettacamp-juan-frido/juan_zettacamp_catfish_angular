import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponenNo1Component } from './komponen-no1.component';

describe('KomponenNo1Component', () => {
  let component: KomponenNo1Component;
  let fixture: ComponentFixture<KomponenNo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomponenNo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomponenNo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
