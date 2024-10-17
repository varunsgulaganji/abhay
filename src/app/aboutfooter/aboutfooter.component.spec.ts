import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutfooterComponent } from './aboutfooter.component';

describe('AboutfooterComponent', () => {
  let component: AboutfooterComponent;
  let fixture: ComponentFixture<AboutfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
