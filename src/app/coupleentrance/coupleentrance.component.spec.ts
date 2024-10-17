import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupleentranceComponent } from './coupleentrance.component';

describe('CoupleentranceComponent', () => {
  let component: CoupleentranceComponent;
  let fixture: ComponentFixture<CoupleentranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoupleentranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoupleentranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
