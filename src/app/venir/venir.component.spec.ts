import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenirComponent } from './venir.component';

describe('VenirComponent', () => {
  let component: VenirComponent;
  let fixture: ComponentFixture<VenirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenirComponent]
    });
    fixture = TestBed.createComponent(VenirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
