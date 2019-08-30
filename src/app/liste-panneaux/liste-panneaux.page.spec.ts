import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePanneauxPage } from './liste-panneaux.page';

describe('ListePanneauxPage', () => {
  let component: ListePanneauxPage;
  let fixture: ComponentFixture<ListePanneauxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePanneauxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePanneauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
