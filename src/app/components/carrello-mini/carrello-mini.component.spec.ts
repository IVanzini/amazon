import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrelloMiniComponent } from './carrello-mini.component';

describe('CarrelloMiniComponent', () => {
  let component: CarrelloMiniComponent;
  let fixture: ComponentFixture<CarrelloMiniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrelloMiniComponent]
    });
    fixture = TestBed.createComponent(CarrelloMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
