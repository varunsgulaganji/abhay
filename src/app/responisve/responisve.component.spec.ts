import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponisveComponent } from './responisve.component';

describe('ResponisveComponent', () => {
  let component: ResponisveComponent;
  let fixture: ComponentFixture<ResponisveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResponisveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponisveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
