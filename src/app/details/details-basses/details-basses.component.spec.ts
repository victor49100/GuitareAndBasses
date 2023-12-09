import { ComponentFixture, TestBed } from '@angular/core/testing';

import {DetailsBassesComponent} from './details-basses.component';

describe('DetailsBassesComponent', () => {
  let component: DetailsBassesComponent;
  let fixture: ComponentFixture<DetailsBassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsBassesComponent]
    });
    fixture = TestBed.createComponent(DetailsBassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
