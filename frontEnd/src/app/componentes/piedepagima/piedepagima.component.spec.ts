import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiedepagimaComponent } from './piedepagima.component';

describe('PiedepagimaComponent', () => {
  let component: PiedepagimaComponent;
  let fixture: ComponentFixture<PiedepagimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiedepagimaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiedepagimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
