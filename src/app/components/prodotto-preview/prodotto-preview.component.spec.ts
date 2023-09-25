import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoPreviewComponent } from './prodotto-preview.component';

describe('ProdottoPreviewComponent', () => {
  let component: ProdottoPreviewComponent;
  let fixture: ComponentFixture<ProdottoPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdottoPreviewComponent]
    });
    fixture = TestBed.createComponent(ProdottoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
