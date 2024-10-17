import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocleavesComponent } from './cocleaves.component';

describe('CocleavesComponent', () => {
  let component: CocleavesComponent;
  let fixture: ComponentFixture<CocleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CocleavesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CocleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
