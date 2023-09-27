import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieSelettoreComponent } from './categorie-selettore.component';

describe('CategorieSelettoreComponent', () => {
  let component: CategorieSelettoreComponent;
  let fixture: ComponentFixture<CategorieSelettoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieSelettoreComponent]
    });
    fixture = TestBed.createComponent(CategorieSelettoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
