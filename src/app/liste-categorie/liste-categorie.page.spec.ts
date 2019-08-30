import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCategoriePage } from './liste-categorie.page';

describe('ListeCategoriePage', () => {
  let component: ListeCategoriePage;
  let fixture: ComponentFixture<ListeCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCategoriePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
