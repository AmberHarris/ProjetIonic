import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanneauParCategoriePage } from './panneau-par-categorie.page';

describe('PanneauParCategoriePage', () => {
  let component: PanneauParCategoriePage;
  let fixture: ComponentFixture<PanneauParCategoriePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanneauParCategoriePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanneauParCategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
