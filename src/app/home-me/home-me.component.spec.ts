import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMEComponent } from './home-me.component';

describe('HomeMEComponent', () => {
  let component: HomeMEComponent;
  let fixture: ComponentFixture<HomeMEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeMEComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
