import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthpagePage } from './fourthpage.page';

describe('FourthpagePage', () => {
  let component: FourthpagePage;
  let fixture: ComponentFixture<FourthpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthpagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
