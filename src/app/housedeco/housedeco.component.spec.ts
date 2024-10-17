import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousedecoComponent } from './housedeco.component';

describe('HousedecoComponent', () => {
  let component: HousedecoComponent;
  let fixture: ComponentFixture<HousedecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HousedecoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousedecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
