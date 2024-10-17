import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationCardComponent } from './decoration-card.component';

describe('DecorationCardComponent', () => {
  let component: DecorationCardComponent;
  let fixture: ComponentFixture<DecorationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecorationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecorationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
