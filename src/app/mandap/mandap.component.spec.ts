import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandapComponent } from './mandap.component';

describe('MandapComponent', () => {
  let component: MandapComponent;
  let fixture: ComponentFixture<MandapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MandapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MandapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
