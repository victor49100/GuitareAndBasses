import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGuitaresComponent } from './details-guitares.component';

describe('DetailsGuitaresComponent', () => {
  let component: DetailsGuitaresComponent;
  let fixture: ComponentFixture<DetailsGuitaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsGuitaresComponent]
    });
    fixture = TestBed.createComponent(DetailsGuitaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
