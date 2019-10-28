import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopintoComponent } from './popinto.component';

describe('PopintoComponent', () => {
  let component: PopintoComponent;
  let fixture: ComponentFixture<PopintoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopintoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopintoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
