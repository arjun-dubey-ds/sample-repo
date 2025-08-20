import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccumulatorsComponent } from './accumulators.component';

describe('AccumulatorsComponent', () => {
  let component: AccumulatorsComponent;
  let fixture: ComponentFixture<AccumulatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccumulatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccumulatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
