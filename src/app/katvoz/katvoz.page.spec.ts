import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatvozPage } from './katvoz.page';

describe('KatvozPage', () => {
  let component: KatvozPage;
  let fixture: ComponentFixture<KatvozPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatvozPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatvozPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
