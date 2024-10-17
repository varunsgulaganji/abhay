import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouselightingComponent } from './houselighting.component';

describe('HouselightingComponent', () => {
  let component: HouselightingComponent;
  let fixture: ComponentFixture<HouselightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouselightingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouselightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
