import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactfooterComponent } from './contactfooter.component';

describe('ContactfooterComponent', () => {
  let component: ContactfooterComponent;
  let fixture: ComponentFixture<ContactfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
